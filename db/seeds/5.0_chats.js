
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([ {
        sender_id: 1,
        receiver_id: 2
      },
      {
        sender_id: 2,
        receiver_id: 1
      },
      {
        sender_id: 3,
        receiver_id: 1
      },
      {
        sender_id: 3,
        receiver_id: 2
      },
      {
        sender_id: 3,
        receiver_id: 4
      },
      ])
    })
}
