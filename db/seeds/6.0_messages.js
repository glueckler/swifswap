
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([ {
        content: 'how did you get this atom bomb',
        chat_id: 1,
        user_id: 1,
        received: true
      },
      {
        content: 'i honestly cannot remember. i like that hat.',
        chat_id: 1,
        user_id: 2,
        received: true
      },
      {
        content: 'i\'m ready to trade. call me at 604-123-4567',
        chat_id: 1,
        user_id: 1
      },
      {
        content: 'how can i make this one shoe work for me if i have two feet?',
        chat_id: 2,
        user_id: 2
      },
      {
        content: 'i will give anything for that hat. name your price!',
        chat_id: 3,
        user_id: 3,
        received: true
      },
      {
        content: 'i\'m not looking for a car right now. do you have a bicycle to offer?',
        chat_id: 3,
        user_id: 1
      },
      {
        content: 'i\'ve always wanted an atom bomb',
        chat_id: 4,
        user_id: 3,
        received: true
      },
      {
        content: 'what is the reason you\'re getting rid of this junk?',
        chat_id: 5,
        user_id: 3,
        received: true
      },
      {
        content: 'i can\'t swim well',
        chat_id: 5,
        user_id: 4,
        received: true
      },
      {
        content: 'i will trade it for your car. meet me at the false creek marina tomorrow at noon',
        chat_id: 5,
        user_id: 4
      },
      ])
    })
}
