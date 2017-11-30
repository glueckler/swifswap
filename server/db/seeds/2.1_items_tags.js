exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('items_tags').insert([ {
        item_id: 1,
        tag_id: 13
      },
      {
        item_id: 2,
        tag_id: 4
      },
      {
        item_id: 3,
        tag_id: 4
      },
      {
        item_id: 4,
        tag_id: 16
      },
      {
        item_id: 5,
        tag_id: 10
      },
      {
        item_id: 5,
        tag_id: 13
      },
      {
        item_id: 5,
        tag_id: 7
      },
      {
        item_id: 6,
        tag_id: 11
      },
      {
        item_id: 6,
        tag_id: 16
      },
      {
        item_id: 8,
        tag_id: 10
      },
      {
        item_id: 7,
        tag_id: 5
      },
      {
        item_id: 8,
        tag_id: 13
      },
      ])
    })
}
