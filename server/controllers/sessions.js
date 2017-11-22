const sessions = function (db) {
  const s = {}
  s.validateSignIn = async function (ctx) {
    console.log(ctx.request.body)
    const account = ctx.request.body.account
    const password = ctx.request.body.password
    let user = await db.select().from('users').where('username', account).then(data => data)
    if (user.length === 0) {
      user = await db.select().from('users').where('email', account).then(data => data)
      if (user.length === 0) {
        ctx.throw(400, 'Invalid Username')
      }
    } 
    if (!user[0].password === password) {
      ctx.throw(400, 'Invalid Username')
    }
    return ctx
  }
  return s
}

module.exports = sessions
