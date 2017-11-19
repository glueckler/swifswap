const ENV = process.env.NODE_ENV || 'development'
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig[ENV])

module.exports = {
  items: require('./items')(knex),
  users: require('./users')(knex),
  sessions: require('./sessions')(knex),
  chat: require('./chat')(knex)
}
