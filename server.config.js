require('dotenv').config()
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
  api
}