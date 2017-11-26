require('dotenv').config()
const Koa         = require('koa')
const serve       = require('koa-static')
const logger      = require('koa-logger')
const Router      = require('koa-router')
const path        = require('path')
const bodyParser  = require('koa-body')()
const multiParser = require('koa-body')({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, 'static/images'),
    keepExtensions: true
  }
})
// const multer     = require('koa-multer')

const app         = new Koa()
const api         = new Router({ prefix: '/api' })
const client      = new Router()
// const upItemImg  = multer({ dest: '../image-uploads/item-imgs' })

app.use(api.routes())
app.use(client.routes())

app.use(serve('static'))

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
  bodyParser,
  multiParser,
  path
}

app.listen(3000)
