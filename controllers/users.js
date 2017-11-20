const dbHelpers = require('./helpers/db.helpers.js')

const users = function (db) {
  const u = {};
  u.example = function () {
    console.log('this is totally an example')
  }

  u.getUserById = async function (id) {
    // return db.select().from('users').where({ id })
    const userFull = await db
      .select(
        'users.username',
        'users.location',
        'users.email',
        'users.img_path',
        'items.id AS item_ids'
      )
      .from('users')
      .where({ 'users.id': id })
      .fullOuterJoin('items', 'items.user_id', 'users.id')
    return dbHelpers.flattenQuery(userFull)
  }
  return u
}

module.exports = users
