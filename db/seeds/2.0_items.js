
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        name: 'est congue elementum in',
        description: 'amet nulla quisque arcu libero rutrum ac lobortis vel',
        user_id: 33
      }, {
        name: 'donec diam neque vestibulum',
        description: 'erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis',
        user_id: 29
      }, {
        name: 'volutpat quam pede',
        description: 'leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio',
        user_id: 45
      }, {
        name: 'turpis elementum',
        description: 'faucibus orci luctus et ultrices posuere cubilia curae',
        user_id: 37
      }, {
        name: 'mi',
        description: 'venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat',
        user_id: 37
      }, {
        name: 'vivamus in felis',
        description: 'curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor',
        user_id: 30
      }, {
        name: 'nulla nunc purus phasellus',
        description: 'augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida',
        user_id: 2
      }, {
        name: 'amet consectetuer adipiscing elit',
        description: 'gravida nisi at nibh in hac',
        user_id: 46
      }, {
        name: 'vestibulum aliquet ultrices erat',
        description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum',
        user_id: 32
      }, {
        name: 'sociis natoque penatibus',
        description: 'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
        user_id: 47
      }, {
        name: 'diam',
        description: 'praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
        user_id: 50
      }, {
        name: 'non mauris morbi non lectus',
        description: 'sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus',
        user_id: 28
      }, {
        name: 'rhoncus sed vestibulum sit',
        description: 'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit',
        user_id: 34
      }, {
        name: 'vulputate vitae nisl aenean lectus',
        description: 'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla',
        user_id: 35
      }, {
        name: 'sodales scelerisque mauris sit',
        description: 'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed',
        user_id: 36
      }])
    })
}
