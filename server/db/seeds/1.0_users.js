
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
        img_path: 'https://api.adorable.io/avatars/285/alice'
      },
      {
        username: 'bob',
        location: 'Kerrisdale',
        email: 'bob@bob.ca',
        password: 'bobster',
        img_path: 'https://api.adorable.io/avatars/285/bob'
      },
      {
        username: 'carol',
        location: 'North Van',
        email: 'carol@north.uk',
        password: 'banana',
        img_path: 'https://api.adorable.io/avatars/285/carol'
      },
      {
        username: 'deltron',
        location: 'Delta',
        email: 'del@del.net',
        password: 'deldel',
        img_path: 'https://api.adorable.io/avatars/285/deltron'
      },
      {
        username: 'eliza',
        location: 'UBC',
        email: 'liz@amazon.co.jp',
        password: 'goose',
        img_path: 'https://api.adorable.io/avatars/285/eliza'
      },
      {
        username: 'joeler',
        location: 'Lighthouse Labs',
        email: 'joel@joel.joel',
        password: 'joel',
        img_path: 'https://api.adorable.io/avatars/285/joel'
      },
      ])
    })
}
