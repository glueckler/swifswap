
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items_chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('items_chats').insert([ {
        item_id: 2,
        chat_id: 1
      },
      {
        item_id: 1,
        chat_id: 1
      },
      {
        item_id: 1,
        chat_id: 2
      },
      {
        item_id: 3,
        chat_id: 2
      },
      {
        item_id: 2,
        chat_id: 3
      },
      {
        item_id: 4,
        chat_id: 3
      },
      {
        item_id: 5,
        chat_id: 4
      },
      {
        item_id: 1,
        chat_id: 4
      },
      {
        item_id: 6,
        chat_id: 5
      },
      {
        item_id: 4,
        chat_id: 5
      }
      ])
    })
}
