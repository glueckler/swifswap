exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments().notNullable();
    table.string('username').notNullable();
    table.string('location').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('img_path');
  })
  .createTable('chats', function(table) {
    table.increments().notNullable();
    table.integer('sender_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('receiver_id').references('id').inTable('users').onDelete('CASCADE').notNullable();

  })
  .createTable('messages', function(table) {
    table.increments().notNullable();
    table.string('content');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('chat_id').references('id').inTable('chats').onDelete('CASCADE').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
  })
  .createTable('items', function(table) {
    table.increments().notNullable();
    table.string('name');
    table.string('description');
  })
  .createTable('photos', function(table) {
    table.increments().notNullable();
    table.integer('item_id').references('id').inTable('items').onDelete('CASCADE').notNullable();
    table.string('img_path');
  })
  .createTable('tags', function(table) {
    table.increments().notNullable();
    table.string('name');
  })
  .createTable('users_favourites', function(table) {
    table.increments().notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('item_id').references('id').inTable('items').onDelete('CASCADE').notNullable();
  })
  .createTable('users_tags', function(table) {
    table.increments().notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('tag_id').references('id').inTable('tags').onDelete('CASCADE');

  })
  .createTable('items_tags', function(table) {
    table.increments().notNullable();
    table.integer('item_id').references('id').inTable('items').onDelete('CASCADE').notNullable();
    table.integer('tag_id').references('id').inTable('tags').onDelete('CASCADE').notNullable();
  })
  .createTable('items_chats', function(table) {
    table.increments().notNullable();
    table.integer('item_id').references('id').inTable('items').onDelete('CASCADE').notNullable();
    table.integer('chat_id').references('id').inTable('chats').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items_chats').dropTable('items_tags').dropTable('users_tags').dropTable('users_favourites').dropTable('tags').dropTable('photos').dropTable('items').dropTable('messages').dropTable('chats').dropTable('users');
};
