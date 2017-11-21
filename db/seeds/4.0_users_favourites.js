
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_favourites').insert([ {
        user_id: 1,
        item_id: 1
      },
      {
        user_id: 1,
        item_id: 4
      },
      {
        user_id: 1,
        item_id: 6
      },
      {
        user_id: 2,
        item_id: 4
      },
      {
        user_id: 3,
        item_id: 2
      },
      {
        user_id: 4,
        item_id: 6
      },
      ])
    })
}
