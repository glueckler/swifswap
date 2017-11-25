const dbHelpers = require('./db-helpers/db.helpers.js')

const chats = function (db) {
  const c = {}

  c.getChatsByUserId = async function (ctx) {
    let userId = '3'
    const chats = await
      db('chats')
        .join('users as receiver', 'chats.receiver_id', 'receiver.id')
        .join('users as sender', 'chats.sender_id', 'sender.id')
        .join('items_chats as icids', 'chats.id', 'icids.chat_id')
        .join('items', 'icids.item_id', 'items.id')
        .select(
          'sender.username as senderName',
          'sender.id as senderId',
          'receiver.id as receiverId',
          'receiver.username as receiverName',
          'chats.id as chatId',
          'chats.updated_at as chatUpdated',
          'chats.created_at as chatCreated',
          'items.img_path as itemPhoto',
          'items.user_id as itemUserId',
          'items.name as itemName',
          'items.id as itemId',
          'items.description as itemDescription'
        )
        .where('receiver.id', userId)
        .orWhere('sender.id', userId)

    ctx.body = dbHelpers.flattenChats(chats)
    return ctx
  }

  c.getMessagesByChatId = async function (chatId) {
    return db('messages')
      .join('chats', 'chats.id', 'messages.chat_id')
      .join('users', 'messages.user_id', 'users.id')
      .select(
        'users.username as messageAuthor',
        'messages.content as messageContent',
        'messages.created_at as messageCreationTime'
      )
      .where('chats.id', chatId)
  }

  c.getItemsByChatId = async function (chatId) {
    return db('messages')
      .join('chats', 'chats.id', 'messages.chat_id')
      .join('items_chats', 'items_chats.chat_id', 'chats.id')
      .join('items', 'items_chats.item_id', 'items.id')
      .join('users', 'messages.user_id', 'users.id')
      .distinct()
      .select(
        'items.img_path as photo',
        'items.name as name',
        'items.user_id as user_id',
      )
      .where('chats.id', chatId)
  }

  c.getSenderByChatID = async function (chatId) {
    return db('users')
      .join('chats', 'users.id', 'chats.sender_id')
      .select(
        'users.username',
        'users.id'
      )
      .where('chats.id', chatId)
  }

  c.getReceiverByChatId = async function (chatId) {
    return db('users')
      .join('chats', 'users.id', 'chats.receiver_id')
      .select(
        'users.username',
        'users.id'
      )
      .where('chats.id', chatId)
  }

  c.getMessages = async function (ctx) {
    const messages = await chats.getMessagesByChatId(ctx.params.id)
    const sender = (await chats.getSenderByChatID(ctx.params.id))[0]
    const receiver = (await chats.getReceiverByChatId(ctx.params.id))[0]
    const items = await chats.getItemsByChatId(ctx.params.id)
    ctx.body = {
      sender,
      receiver,
      items,
      messages
    }
    return ctx
  }

  c.createChat = async function (ctx) {
    const { senderId, receiverId, senderItemId, receiverItemId, message }  = ctx.request.body
    const chatId = parseInt(await db('chats').insert({sender_id: senderId, receiver_id: receiverId}, 'id'), 10)
    await db('items_chats').insert([{chat_id: chatId, item_id: receiverItemId}, {chat_id: chatId, item_id: senderItemId}])
    await db('messages').insert({content: message, chat_id: chatId, user_id: senderId})
    return ctx
  }

  return c
}

module.exports = chats
