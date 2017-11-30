
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([ {
        name: 'atom bomb',
        description: 'with great atom bomb comes great responsibility',
        user_id: 2,
        img_path: 'https://i.stack.imgur.com/C3qcc.png'
      },
      {
        name: 'hat',
        description: 'you might like to put it on your head',
        user_id: 1,
        img_path: 'https://i.pinimg.com/originals/d1/3c/c8/d13cc8fb971fbaf4cd3cdfc031bc79f3.jpg'
      },
      {
        name: 'shoe',
        description: 'where is the other one?  bear is driving?  how can that be?',
        user_id: 1,
        img_path: 'https://www.askideas.com/media/16/Box-Funny-Nike-Shoes.jpg'
      },
      {
        name: 'car',
        description: 'runs on fuel, rolls beautifully, never brakes',
        user_id: 3,
        img_path: 'http://st.motortrend.com/uploads/sites/5/2016/01/Top-Gear-Reliant-Robin-rolling-2.jpg'
      },
      {
        name: 'house',
        description: 'fully functioning, perfect for the dwelling and the habitation and the occupation',
        user_id: 3,
        img_path: 'http://canadianart.ca/wp-content/uploads/2016/02/ken-lum-vancouver-especially-2015-courtesy-221a-photo-dennis-ha.jpg'
      },
      {
        name: 'boat',
        description: 'floats with ease, on most liquids and some rubbers',
        user_id: 4,
        img_path: 'http://i.imgur.com/MObThDk.jpg'
      },
      {
        name: 'power mac',
        description: 'filled with power, entirely to the upper boundary',
        user_id: 5,
        img_path: 'http://www.applegazette.com/wp-content/uploads/powermac_mailbox-550x733.jpg'
      },
      {
        name: 'coffee mug',
        description: 'a dainty yet elegant liquids vessel (not a liquid vessel, that would not work)',
        user_id: 5,
        img_path: 'https://img0.etsystatic.com/208/2/15817494/il_340x270.1295300294_pqo3.jpg'
      },
      ])
    })
}
