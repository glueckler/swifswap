const users = function (db) {
  const u = {}

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
    const { username, email } = ctx.request.body
    const checkUserExists = await db('users').select().where({ email }).orWhere({ username })

    if (checkUserExists.length) {
      if (checkUserExists[0].email === email) {
        ctx.throw(400, 'Email Already Exists')
      } else {
        ctx.throw(400, 'Username Already Exists')
      }
    }

    await db('users').insert(ctx.request.body)
    return ctx
  }

  return u
}

module.exports = users