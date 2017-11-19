const chat = function (db) {
  const c = {}
  c.exampleFunction = function () {
    console.log('this is an example')
  }
  c.getChats = async function (id) {
    return db.select().from('chats')
  }
  c.getChatById = async function (id) {
    return db.select().from('chats').where({ id })
  }
  return c
}

module.exports = chat
