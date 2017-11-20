const { items, users, chat } = require('./controllers/controller')
const { app, api, bodyParser } = require('./server.config')

api.get('/', async ctx => {
  ctx.body = 'Hello mr Mr'
})

// See user profile
api.get('/users/:id', async ctx => {
  ctx.body = (await users.getUserById(ctx.params.id))[0]
})

api.post('/users', async ctx => {
  ctx.body = 'you called the post method at /users'
})

api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})

api.delete('users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})

// Session
api.post('/session', async ctx => {
  ctx.body = 'you called the post method at /session'
})

api.delete('/session', async ctx => {
  ctx.body = 'you called the delete method at /session'
})

// Item
api.get('/items/:id', async ctx => {
  ctx.body = (await items.getItemById(ctx.params.id))
})

api.post('/items', bodyParser(), async ctx => {
  await items.createItem(ctx.request.body)
})

api.put('/items/:id', async ctx => {

})

api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

// Chat
api.get('/chats', async ctx => {
  ctx.body = (await chat.getChats())
})

api.get('/chats/:id', async ctx => {
  ctx.body = (await chat.getChatById(ctx.params.id))[0]
})

api.post('/chats/:id', async ctx => {
  ctx.body = 'you called post at /chats/:id'
})

api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})

app.listen(3000)
