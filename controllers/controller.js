const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('../knexfile')
console.log(knexConfig[environment])
const knex = require('knex')(knexConfig[environment])

module.exports = {
  items: require('./items')(knex),
  users: require('./users')(knex),
  sessions: require('./sessions')(knex),
  chat: require('./chat')(knex)
}
