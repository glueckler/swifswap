
exports.up = function (knex) {
  return knex.schema.table('chats', function (table) {
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('chats', function (table) {
    table.dropColumn('updated_at')
    table.dropColumn('created_at')
  })
}
