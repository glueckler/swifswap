const time = require('./seed-helpers/seed_moments.js')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([ {
        sender_id: 1,
        receiver_id: 2,
        created_at: time.m1c1first,
        updated_at: time.m3c1
      },
      {
        sender_id: 2,
        receiver_id: 1,
        created_at: time.m4c2first,
        updated_at: time.m4c2first
      },
      {
        sender_id: 3,
        receiver_id: 1,
        created_at: time.m5c3first,
        updated_at: time.m6c3
      },
      {
        sender_id: 3,
        receiver_id: 2,
        created_at: time.m7c4first,
        updated_at: time.m7c4first
      },
      {
        sender_id: 3,
        receiver_id: 4,
        created_at: time.m8c5first,
        updated_at: time.m10c5
      },
      ])
    })
}
