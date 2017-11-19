require('dotenv').config()
const env       = require('dotenv')
const logger    = require('koa-logger')
const Router    = require('koa-router')

const Koa       = require('koa');
const app       = new Koa()
const api       = new Router({ prefix: '/api' })

app.use(api.routes())

if (process.env.NODE_ENV === 'development') {
  console.log('koa server script ran in development mode!!!!!!!')
  app.use(logger())  
}

asdf
asdf

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
})

//USERS ROUTES
// See user profile
api.get('/users/:id', async ctx => {
  ctx.body = 'you are in the users id route'
})
//Create new user 
api.post('/users', async ctx => {
  ctx.body = 'you called the post method at /users'
})
//Update user profile 
api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})
//delete account 
api.delete('users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})


//session routes
//Login
api.post('/session', async ctx => {
  ctx.body = 'you called the post method at /session'
})
//Logout
api.delete('/session', async ctx => {
  ctx.body = 'you called the delete method at /session'
})

//item routes
api.get('/items/:id', async ctx => {
  ctx.body = 'you called get at /items/:id'
})

app.listen(3000);
