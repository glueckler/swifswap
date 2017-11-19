
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('items_tags').insert([{
        "item_id": 32,
        "tag_id": 16
      }, {
        "item_id": 21,
        "tag_id": 13
      }, {
        "item_id": 44,
        "tag_id": 9
      }, {
        "item_id": 32,
        "tag_id": 3
      }, {
        "item_id": 26,
        "tag_id": 8
      }, {
        "item_id": 21,
        "tag_id": 6
      }, {
        "item_id": 14,
        "tag_id": 8
      }, {
        "item_id": 5,
        "tag_id": 1
      }, {
        "item_id": 4,
        "tag_id": 2
      }, {
        "item_id": 1,
        "tag_id": 11
      }, {
        "item_id": 11,
        "tag_id": 12
      }, {
        "item_id": 47,
        "tag_id": 10
      }, {
        "item_id": 29,
        "tag_id": 11
      }, {
        "item_id": 13,
        "tag_id": 8
      }, {
        "item_id": 22,
        "tag_id": 9
      }, {
        "item_id": 8,
        "tag_id": 5
      }, {
        "item_id": 18,
        "tag_id": 1
      }, {
        "item_id": 11,
        "tag_id": 4
      }, {
        "item_id": 5,
        "tag_id": 16
      }, {
        "item_id": 35,
        "tag_id": 10
      }, {
        "item_id": 22,
        "tag_id": 7
      }, {
        "item_id": 39,
        "tag_id": 7
      }, {
        "item_id": 16,
        "tag_id": 13
      }, {
        "item_id": 21,
        "tag_id": 9
      }, {
        "item_id": 15,
        "tag_id": 3
      }, {
        "item_id": 20,
        "tag_id": 1
      }, {
        "item_id": 4,
        "tag_id": 12
      }, {
        "item_id": 32,
        "tag_id": 8
      }, {
        "item_id": 50,
        "tag_id": 11
      }, {
        "item_id": 44,
        "tag_id": 1
      }, {
        "item_id": 13,
        "tag_id": 11
      }, {
        "item_id": 46,
        "tag_id": 8
      }, {
        "item_id": 18,
        "tag_id": 16
      }, {
        "item_id": 14,
        "tag_id": 1
      }, {
        "item_id": 21,
        "tag_id": 4
      }, {
        "item_id": 49,
        "tag_id": 4
      }, {
        "item_id": 16,
        "tag_id": 1
      }, {
        "item_id": 38,
        "tag_id": 13
      }, {
        "item_id": 21,
        "tag_id": 1
      }, {
        "item_id": 48,
        "tag_id": 11
      }, {
        "item_id": 29,
        "tag_id": 5
      }, {
        "item_id": 20,
        "tag_id": 6
      }, {
        "item_id": 20,
        "tag_id": 16
      }, {
        "item_id": 37,
        "tag_id": 3
      }, {
        "item_id": 23,
        "tag_id": 10
      }, {
        "item_id": 49,
        "tag_id": 7
      }, {
        "item_id": 38,
        "tag_id": 11
      }, {
        "item_id": 24,
        "tag_id": 14
      }, {
        "item_id": 45,
        "tag_id": 1
      }, {
        "item_id": 25,
        "tag_id": 13
      }]);
    });
};
