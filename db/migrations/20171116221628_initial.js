exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username').notNullable();
    table.string('location').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('img_path');
  })
  .createTable('chats', function(table) {
    table.increments().notNullable();
    table.integer('sender_id').references('id').inTable('users').notNullable();
    table.integer('receiver_id').references('id').inTable('users').notNullable();

  })
  .createTable('messages', function(table) {
    table.increments();
    table.string('content');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('chat_id').references('id').inTable('chats').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
  })
  .createTable('items', function(table) {
    table.increments();
    table.string('name');
    table.string('description');
  })
  .createTable('photos', function(table) {
    table.increments();
    table.integer('item_id').references('id').inTable('items').notNullable();
    table.string('img_path');
  })
  .createTable('tags', function(table) {
    table.increments();
    table.string('name');
  })
  .createTable('users_favourites', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('item_id').references('id').inTable('items').notNullable();
  })
  .createTable('users_tags', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('tag_id').references('id').inTable('tags').notNullable();

  })
  .createTable('items_tags', function(table) {
    table.increments();
    table.integer('item_id').references('id').inTable('items').notNullable();
    table.integer('tag_id').references('id').inTable('tags').notNullable();
  })
  .createTable('items_chats', function(table) {
    table.increments();
    table.integer('item_id').references('id').inTable('items').notNullable();
    table.integer('chat_id').references('id').inTable('chats').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items_chats').dropTable('items_tags').dropTable('users_tags').dropTable('users_favourites').dropTable('tags').dropTable('photos').dropTable('items').dropTable('messages').dropTable('chats').dropTable('users');
};
