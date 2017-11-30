
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([ {
        username: 'alice',
        location: 'Gastown',
        email: 'alice@test.com',
        password: 'qwertyuiop',
        img_path: 'http://www.sepeb.com/alice-cooper/alice-cooper-007.jpg'
      },
      {
        username: 'bob',
        location: 'Kerrisdale',
        email: 'bob@bob.ca',
        password: 'bobster',
        img_path: 'https://img.discogs.com/qGtCC8ruEjHn01O3KM9YREKZtAs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-41441-1444396064-7860.jpeg.jpg'
      },
      {
        username: 'carol',
        location: 'North Van',
        email: 'carol@north.uk',
        password: 'banana',
        img_path: 'http://thelongcenter.org/wp-content/uploads/2015/12/Carol-Burnett_On-Sale-Blog.jpg'
      },
      {
        username: 'deltron',
        location: 'Delta',
        email: 'del@del.net',
        password: 'deldel',
        img_path: 'http://cdn.antiquiet.com/wp-content/uploads/2012/01/l_191324cb22638e5a1bf2027a0f6734ca-468x350.jpg'
      },
      {
        username: 'eliza',
        location: 'UBC',
        email: 'liz@amazon.co.jp',
        password: 'goose',
        img_path: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/11/03/BostonGlobe.com/Boston/Images/f9e697ffa3ae41c2a02824bbf41fa4b9-f9e697ffa3ae41c2a02824bbf41fa4b9-0.jpg'
      },
      {
        username: 'joeler',
        location: 'Lighthouse Labs',
        email: 'joel@joel.joel',
        password: 'joel',
        img_path: 'http://joelshinness.com/assets/img/avatars/avatar_square.jpg'
      },
      ])
    })
}
