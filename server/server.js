  const fs = require('fs')
const { items, users, chats, sessions } = require('./controllers/controller')
const { api, client, bodyParser, multiParser } = require('./server.config')

api.get('/', async ctx => {
  await items.getHomePageItems(ctx)
})

// ------- C L I E N T  R O U T E S --------

client.get('/', async ctx => {
  ctx.redirect('http://localhost:8080')
})

client.get('/logout', async ctx => {
  ctx = await sessions.destroySession(ctx)
  ctx.redirect('/')
})

client.post('/sessions', bodyParser, async ctx => {
  ctx = await sessions.validateSignIn(ctx)
  ctx.redirect('/')
})

// ------- A P I  R O U T E S --------

// user routes
api.get('/usersession', async ctx => {
  ctx.user = await sessions.validate(ctx)
  if (ctx.user) {
    ctx.body = ctx.user
  }
})

api.get('/profile/:username', async ctx => {
  const id = await users.getUserIdByUsername(ctx.params.username)
  ctx.redirect('/api/users/' + id)
})

api.get('/users/:id', async ctx => {
  ctx.body = await users.getUserById(ctx.params.id)
})

api.post('/users', bodyParser, async ctx => {
  ctx = await users.createUser(ctx)
})

api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})

api.delete('/users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})

// ----------------------

// Sessions
api.post('/sessions', bodyParser, async ctx => {
  ctx = await sessions.validateSignIn(ctx)
  ctx.body = 'this is the end'
})

api.get('/set', async ctx => {
  ctx = await sessions.setSession(ctx, 'sleepa')
  ctx.body = 'just so you know'
})

api.get('/destroy', async ctx => {
  ctx = await sessions.destroySession(ctx)
  ctx.body = 'session destroyed'
})

api.delete('/sessions', async ctx => {
  ctx.body = 'you called the delete method at /session'
})

// ----------------------

// Item
api.get('/items/:id', async ctx => {
  const item = (await items.getItemById(ctx.params.id))
  ctx.body = item
})

api.post('/items', bodyParser, async ctx => {
  ctx = await items.createItem(ctx)
})

api.post('/items/photo', multiParser, async ctx => {
  const { files, fields } = ctx.request.body
  fs.rename(files.photo.path, './static/images/' + fields.fileName, function (err) {
    if (err) throw err
  })
  ctx.body = 'well received?'
})

api.put('/items/:id', async ctx => {

})

api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

// ----------------------

// Chats
api.get('/chats', async ctx => {
  ctx.user = await sessions.validate(ctx)
  ctx = await chats.getChatsByUserId(ctx)
})

api.get('/chats/:id', async ctx => {
  ctx = await chats.getMessages(ctx)
})

api.post('/chats/:id', bodyParser, async ctx => {
  await chats.saveMessage(ctx)
})

api.post('/chats', bodyParser, async ctx => {
  ctx = await chats.createChat(ctx)
  ctx.status = 200
})

api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})
