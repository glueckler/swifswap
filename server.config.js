require('dotenv').config()
const logger     = require('koa-logger')
const bodyParser = require('koa-body')
const Router     = require('koa-router')

const Koa        = require('koa')
const app        = new Koa()
const api        = new Router({ prefix: '/api' })
const client     = new Router()

app.use(api.routes())
app.use(client.routes())

if (process.env.NODE_ENV === 'development') {
  console.log('koa server script running in development ENV!')
  app.use(logger())
}

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

module.exports = {
  app,
  api,
  client,
  bodyParser
}

app.listen(3000)
