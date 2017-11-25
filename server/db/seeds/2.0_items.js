
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([ {
        name: 'atom bomb',
        description: 'with great atom bomb comes great responsibility',
        user_id: 2,
        img_path: 'https://previews.123rf.com/images/lineartestpilot/lineartestpilot1401/lineartestpilot140101096/24799563-cartoon-atom-bomb-Stock-Vector.jpg'
      },
      {
        name: 'hat',
        description: 'you might like to put it on your head',
        user_id: 1,
        img_path: 'https://static.giantbomb.com/uploads/original/10/103701/1791449-newtophat.jpg'
      },
      {
        name: 'shoe',
        description: 'where is the other one?  bear is driving?  how can that be?',
        user_id: 1,
        img_path: 'http://www.carltonlondon.co.uk/images/carlton-london-ken-leather-moccasin-shoe-red-p536-2334_image.jpg'
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
        img_path: 'https://cdn.cultofmac.com/wp-content/uploads/2017/03/Power_Macintosh_7220-780x482.jpg'
      },
      {
        name: 'coffee mug',
        description: 'a dainty yet elegant liquids vessel (not a liquid vessel, that would not work)',
        user_id: 5,
        img_path: 'http://www.ikea.com/gb/en/images/products/ikea-365-mug-white__0328949_pe520151_s5.jpg'
      },
      ])
    })
}
