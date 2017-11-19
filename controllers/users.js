const users = function (db) {
  const u = {}
  u.example = function () {
    console.log('this is totally an example')
  }

  u.getUserById = async function (id) {
    return db.select().from('users').where({ id })
  }
  return u
}

module.exports = users
