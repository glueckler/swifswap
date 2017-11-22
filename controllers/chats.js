const dbHelpers = require('./helpers/db.helpers.js')

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

  c.getMessagesByChatId = async function (id) {
    return db.select().from('chats').where({ id })
  }
  return c
}

module.exports = chats
