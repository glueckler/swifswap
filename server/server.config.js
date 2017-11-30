require('dotenv').config()
const Koa         = require('koa')
const serve       = require('koa-static')
const logger      = require('koa-logger')
const Router      = require('koa-router')
const path        = require('path')
const session     = require('koa-session')
const bodyParser  = require('koa-body')()
const multiParser = require('koa-body')({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, 'static/images'),
    keepExtensions: true
  }
})
const { sessions } = require('./controllers/controller')

const app = new Koa()
app.keys = [process.env.SECRET]
app.use(session({ key: 'swif:authentication', maxAge: 86400000 }, app))
app.use(serve('static'))

const api = new Router({ prefix: '/api' })
const client = new Router()

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

app.use(async (ctx, next) => {
  ctx.user = await sessions.validate(ctx)
  await next()
})

app.use(api.routes())
app.use(client.routes())

module.exports = {
  app,
  api,
  client,
  bodyParser,
  multiParser,
  path
}

if (process.env.NODE_ENV === 'production') {
  app.listen(80, '0.0.0.0')
} else {
  app.listen(3000, '0.0.0.0')
}
