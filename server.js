const { items, users, chat, sessions } = require('./controllers/controller')
const { app, api, client, bodyParser } = require('./server.config')

api.get('/', async ctx => {
  ctx.body = 'Hello mr Mr'
})

// ------- C L I E N T  R O U T E S --------

client.get('/', async ctx => {
  ctx.body = 'Hello World I\'m a computer'
})

// ------- A P I  R O U T E S --------

// See user profile
api.get('/users/:id', async ctx => {
  ctx.body = await users.getUserById(ctx.params.id)
})

api.post('/users', bodyParser(), async ctx => {
  ctx = await users.createUser(ctx)
})

api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})

api.delete('users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})

// ----------------------

// Session
api.post('/session', bodyParser(), async ctx => {
  ctx = await sessions.validateSignIn(ctx)
  ctx.redirect('/')
})

api.delete('/session', async ctx => {
  ctx.body = 'you called the delete method at /session'
})

// ----------------------

// Item
api.get('/items/:id', async ctx => {
  const item = (await items.getItemById(ctx.params.id))
  ctx.body = item
})

api.post('/items', bodyParser(), async ctx => {
  ctx = await items.createItem(ctx)
})

api.put('/items/:id', async ctx => {

})

api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

// ----------------------

// Chat
api.get('/chats', async ctx => {
  ctx.body = (await chat.getChats())
})

api.get('/chats/:id', async ctx => {
})

api.post('/chats/:id', async ctx => {
  ctx.body = 'you called post at /chats/:id'
})

api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})
