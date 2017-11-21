
exports.up = function (knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.dropColumn('created_at')
  })
}
