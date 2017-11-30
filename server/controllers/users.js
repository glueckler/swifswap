const users = function (db) {
  const sessions = require('./sessions')(db)
  const u = {}

  u.getUserIdByUsername = async function (username) {
    const user = await db('users').select('id').where('username', username)
    return user[0] && user[0].id
  }

  u.getUserById = async function (id) {
    const userData = await db('users').leftJoin('items', 'users.id', 'items.user_id').select(
      'users.id as userId',
      'users.username as userName',
      'users.location as userLocation',
      'users.img_path as userPhoto',
      'items.name as itemName',
      'items.description as itemDescription',
      'items.id as itemId',
      'items.img_path as itemImage'
    ).where('users.id', id)
    return userData
  }

  u.createUser = async function (ctx) {
    //hardcode some values for now
    ctx.request.body.location = "Vancouver"
    ctx.request.body.img_path = "https://www.fillmurray.com/g/300/300"
    const { username, email } = ctx.request.body
    const checkUserExists = await db('users').select().where({ email }).orWhere({ username })

    if (checkUserExists.length) {
      if (checkUserExists[0].email === email) {
        ctx.throw(400, 'Email Already Exists')
      } else {
        ctx.throw(400, 'Username Already Exists')
      }
    }

    const userId = await db('users').insert(ctx.request.body, 'id')
    sessions.setSession(ctx, userId[0])
    return ctx
  }

  return u
}

module.exports = users
