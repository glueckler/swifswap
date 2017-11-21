(async function _ () {
  const environment = process.env.NODE_ENV || 'development'
  const knexConfig = require('../knexfile')
  const knex = require('knex')(knexConfig[environment])

  const tagsArray = await knex.select().from('tags')
  const tagsHash = {}
  for ( let tag of tagsArray ) {
    tagsHash[tag.id] = tag.name
  }
  console.log(tagsHash)
  module.exports = {
    items: require('./items')(knex, tagsHash),
    users: require('./users')(knex),
    sessions: require('./sessions')(knex),
    chat: require('./chat')(knex)
  }
})()
