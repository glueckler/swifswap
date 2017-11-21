const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig[environment])

module.exports = {
  items: require('./items')(knex),
  users: require('./users')(knex),
  sessions: require('./sessions')(knex),
  chats: require('./chat')(knex)
}
