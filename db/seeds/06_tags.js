
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          name: 'Appliances'},
        {
          name: 'Bikes, Boards, etc.'},
        {
          name: 'Books'},
        {
          name: 'Clothing'},
        {
          name: 'Electronics'},
        {
          name: 'For kids'},
        {
          name: 'Furniture'},
        {
          name: 'Games'},
        {
          name: 'Garden'},
        {
          name: 'Household'},
        {
          name: 'Marine'},
        {
          name: 'Music'},
        {
          name: 'Other'},
        {
          name: 'Photo/video'},
        {
          name: 'Sports'},
        {
          name: 'Vehicles'}
      ]);
    });
};
