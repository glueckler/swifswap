const dbHelpers = require('./helpers/db.helpers.js')

const chat = function (db) {
  const c = {}
  c.exampleFunction = function () {
    console.log('this is an example')
  }

  // TODO: this query is incomplete... adjusting seeds first before coming back to it
  c.getChatsByUserId = async function (userId) {
    const userChatsFull = await db
      .from('chats')
      .fullOuterJoin('users', 'users.id', 'chats.receiver_id')
      .fullOuterJoin('items', 'items.user_id', 'chats.receiver_id')
      .fullOuterJoin('items_chats', 'items_chats.item_id', 'items.id')
      .fullOuterJoin('photos', 'photos.item_id', 'items_chats.item_id')
      .select(
        'users.username AS receiver_username',
        'chats.created_at AS chat_creation_time',
        'chats.updated_at',
        'chats.id AS chat_id',
        'items.name AS item_name',
        'photos.img_path AS item_photo')
      .where({ 'chats.sender_id': userId })
    return dbHelpers.flattenQuery(userChatsFull)
  }
  c.getMessagesByChatId = async function (id) {
    return db.select().from('chats').where({ id })
  }
  return c
}

module.exports = chat
