require('dotenv').config()
const { items } = require('./controllers/controller')
const env       = require('dotenv')
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

//USERS ROUTES
// See user profile
api.get('/users/:id', async ctx => {
  ctx.body = 'you are in the users id route'
})
//Create new user 
api.post('/users', async ctx => {
  ctx.body = 'you called the post method at /users';
})
//Update user profile 
api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})
//delete account 
api.delete('users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})


//SESSION ROUTES
//Login
api.post('/session', async ctx => {
  ctx.body = 'you called the post method at /session'
})
//Logout
api.delete('/session', async ctx => {
  ctx.body = 'you called the delete method at /session'
})

//ITEM ROUTES
//see item
api.get('/items/:id', async ctx => {
  ctx.body = 'you called get at /items/:id'
})
//create item
api.post('/items', async ctx => {
  ctx.body = 'you called post at /items'
})
//update item
api.post('/items/:id', async ctx => {
  ctx.body = 'you called update at /items/:id'
})
//delete item
api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

//CHAT ROUTES
// Get chat rooms
api.get('/chats', async ctx => {
  ctx.body = 'you called get at /chats'
})
//Create new chat
api.post('/chats/:id', async ctx => {
  ctx.body = 'you called post at /chats/:id'
})
//Delete chat
api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})
app.listen(3000);
