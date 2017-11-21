const dbHelpers = require('./helpers/db.helpers.js')

const chat = function (db) {
  const c = {}
  c.exampleFunction = function () {
    console.log('this is an example')
  }

  // TODO: this query is incomplete... adjusting seeds first before coming back to it... Jeremy assisted with logic
  // c.getChatsByUserId = async function (userId) {
  //   const userChatsFull = await db
  //     .from('chats')
  //     .fullOuterJoin('users', 'users.id', 'chats.receiver_id')
  //     .fullOuterJoin('items', 'items.user_id', 'chats.receiver_id')
  //     .fullOuterJoin('items_chats', 'items_chats.item_id', 'items.id')
  //     .fullOuterJoin('photos', 'photos.item_id', 'items_chats.item_id')
  //     .select(
  //       'users.username AS receiver_username',
  //       'chats.created_at AS chat_creation_time',
  //       'chats.updated_at',
  //       'chats.id AS chat_id',
  //       'items.name AS item_name',
  //       'photos.img_path AS item_photo')
  //     .where({ 'chats.sender_id': userId })
  //   return dbHelpers.flattenQuery(userChatsFull)
  // }
  // c.getChatsByUserId = async function (userId) {
  //   const userChatsFull = await db
  //     .from('chats')
  //     .join('users', 'users.id', 'chats.receiver_id')
  //     .join('users', 'users_id', 'chats.sender_id')
  //     .join('items_chats', 'items_chats.chat_id', 'chats.id')
  //     .join('items', 'items_chats.item_id', 'items.id')
  //     .join('users_item', 'items.user_id', 'users.id')
  //     .join('users', 'users.id', 'chats_sender.id')
  //     .join('users', 'users.id', 'chats.receiver_id')
  //     .join('items_chats AS oic', 'items_chats.chat_id', 'chats.id')
  //     .join('items AS other_item', 'items_chats.item_id', 'other_item.id')
  //     .join('other_item', 'other_item.user_id', 'other.id')
  //     .where({ 'chats.sender_id': userId })
  //     .select(
  //       'users.id', 'me.username as me_name',
  //       'chats.id AS chat_id',
  //       'other.id', 'other.username',
  //       'me_item.id AS me_item_id', 'me_item.name AS me_item_name', 'me_item.user_id AS me_item_user_id',
  //       'chats.created_at AS chat_creation_time', 'chats.updated_at AS chat_update_time',
  //       'items.name AS item_name',
  //       'photos.img_path AS item_photo')
  //   return dbHelpers.flattenQuery(userChatsFull)
  // }
  c.getChatsByUserId = async function (userId) {
    const userChatsFull = await db
      .knex.raw(select)(me.id as me_id, me.username as me_name, 
        chats.id as chat_id, 
        other.id, other.username, 
        me_item.id me_item_id, me_item.name me_item_name, me_item.user_id, 
        other_item.id other_item_id, other_item.name other_item_name, other_item.user_id
    FROM chats
     JOIN users me on me.id = chats.receiver_id           OR me.id = chats.sender_id
     JOIN items_chats mic on mic.chat_id = chats.id
     JOIN items me_item on mic.item_id = me_item.id and me_item.user_id = me.id
     JOIN users other on other.id = chats.sender_id       OR me.id = chats.receiver_id
     JOIN items_chats oic on oic.chat_id = chats.id
     JOIN items other_item on oic.item_id = other_item.id and other_item.user_id = other.id
    WHERE me.id = 1)
    return dbHelpers.flattenQuery(userChatsFull)
  }
  c.getMessagesByChatId = async function (id) {
    return db.select().from('chats').where({ id })
  }
  return c
}

module.exports = chat
