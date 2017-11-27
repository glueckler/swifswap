const sessions = function (db) {
  const s = {}
  s.validateSignIn = async function (ctx) {
    const { username, password } = ctx.request.body
    let user = await db.select().from('users').where('username', username).then(data => data)
    if (user.length === 0) {
      user = await db.select().from('users').where('email', username).then(data => data)
      if (user.length === 0) {
        ctx.throw(400, 'Invalid Username')
      }
    }
    if (!user[0].password === password) {
      ctx.throw(400, 'Invalid Username')
    }

    ctx = await s.setSession(ctx, '' + user[0].id)
    return ctx
  }

  s.setSession = async function (ctx, userId) {
    ctx.session.user = userId
    return ctx
  }

  s.destroySession = async function (ctx) {
    ctx.session = null
    return ctx
  }

  s.validate = async function (ctx) {
    const id = ctx.session.user
    if (ctx.session.user) {
      var user = await db.select('id', 'username', 'location', 'img_path').from('users').where('id', id)
    }
    if (!user || !ctx.session.user) {
      ctx.body = 'Invalid cookie'
      return undefined
    } else {
      return user[0]
    }
  }

  return s
}

module.exports = sessions
