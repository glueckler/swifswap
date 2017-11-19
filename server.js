require('dotenv').config()
const { items } = require('./controllers/controller')
const logger    = require('koa-logger')
const Router    = require('koa-router')

const Koa       = require('koa')
const app       = new Koa()
const api       = new Router({ prefix: '/api' })

app.use(api.routes())

if (process.env.NODE_ENV === 'development') {
  console.log('koa server script running in development ENV!')
  app.use(logger())
}

items.testQuery()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

api.get('/', async ctx => {
  ctx.body = 'Hello mr Mr'
  // knex.select().table('items')
})

// See user profile
api.get('/users/:id', async ctx => {
  ctx.body = 'you are in the users id route'
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
  ctx.body = 'you called get at /items/:id'
})

api.post('/items', async ctx => {
  ctx.body = 'you called post at /items'
})

api.post('/items/:id', async ctx => {
  ctx.body = 'you called update at /items/:id'
})

api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

// Chat
api.get('/chats', async ctx => {
  ctx.body = 'you called get at /chats'
})

api.post('/chats/:id', async ctx => {
  ctx.body = 'you called post at /chats/:id'
})

api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})
app.listen(3000)
