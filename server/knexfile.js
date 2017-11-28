// Update with your config settings.
require('dotenv').config()
console.log(process.env.PG_CONNECTION_STRING)
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'swifswap',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    // connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

}
