
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, name: 'Appliances'},
        {id: 2, name: 'Bikes, Boards, etc.'},
        {id: 3, name: 'Books'},
        {id: 4, name: 'Clothing'},
        {id: 5, name: 'Electronics'},
        {id: 6, name: 'For kids'},
        {id: 7, name: 'Furniture'},
        {id: 8, name: 'Games'},
        {id: 9, name: 'Garden'},
        {id: 10, name: 'Household'},
        {id: 11, name: 'Marine'},
        {id: 12, name: 'Music'},
        {id: 13, name: 'Other'},
        {id: 14, name: 'Photo/video'},
        {id: 15, name: 'Sports'},
        {id: 16, name: 'Vehicles'}
      ]);
    });
};
