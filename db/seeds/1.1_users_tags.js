
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_tags').insert([ {
        user_id: 1,
        tag_id: 2
      },
      {
        user_id: 2,
        tag_id: 4
      },
      {
        user_id: 3,
        tag_id: 4
      },
      {
        user_id: 4,
        tag_id: 4
      },
      {
        user_id: 5,
        tag_id: 3
      },
      {
        user_id: 4,
        tag_id: 2
      },
      {
        user_id: 4,
        tag_id: 2
      },
      {
        user_id: 4,
        tag_id: 1
      },
      {
        user_id: 1,
        tag_id: 1
      }, {
        user_id: 1,
        tag_id: 10
      },
      {
        user_id: 3,
        tag_id: 15
      },
      ])
    })
}
