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
const history = require('koa2-connect-history-api-fallback')

const app = new Koa()

const api = new Router({ prefix: '/api' })
const router = new Router()

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

app.keys = [process.env.SECRET]
app.use(session({ key: 'swif:authentication', maxAge: 86400000 }, app))
app.use(async (ctx, next) => {
  ctx.user = await sessions.validate(ctx)
  await next()
})

app.use(history({ whiteList: ['/api', '/logout', '/sessions'] }))

app.use(serve('static'))
app.use(serve('../client/dist'))

app.use(api.routes())
app.use(router.routes())

module.exports = {
  app,
  api,
  router,
  bodyParser,
  multiParser,
  path
}

app.listen(3000, '0.0.0.0')
