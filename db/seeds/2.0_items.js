
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
      }, {
        name: 'velit eu est congue',
        description: 'eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat',
        user_id: 11
      }, {
        name: 'tincidunt eget',
        description: 'velit id pretium iaculis diam erat fermentum justo nec',
        user_id: 14
      }, {
        name: 'mauris vulputate elementum nullam varius',
        description: 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus',
        user_id: 32
      }, {
        name: 'at feugiat non pretium quis',
        description: 'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue',
        user_id: 48
      }, {
        name: 'blandit lacinia erat vestibulum sed',
        description: 'commodo placerat praesent blandit nam nulla',
        user_id: 15
      }, {
        name: 'quis augue luctus',
        description: 'natoque penatibus et magnis dis parturient montes',
        user_id: 28
      }, {
        name: 'augue luctus tincidunt nulla',
        description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
        user_id: 11
      }, {
        name: 'a libero nam dui',
        description: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque',
        user_id: 46
      }, {
        name: 'imperdiet nullam orci pede venenatis',
        description: 'morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
        user_id: 16
      }, {
        name: 'odio condimentum id luctus',
        description: 'odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est',
        user_id: 39
      }, {
        name: 'suspendisse',
        description: 'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu',
        user_id: 36
      }, {
        name: 'nec',
        description: 'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id',
        user_id: 40
      }, {
        name: 'libero nam dui proin leo',
        description: 'ultrices enim lorem ipsum dolor sit amet',
        user_id: 29
      }, {
        name: 'orci luctus et ultrices posuere',
        description: 'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci',
        user_id: 5
      }, {
        name: 'sem fusce consequat nulla',
        description: 'luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et',
        user_id: 41
      }, {
        name: 'ornare imperdiet sapien urna pretium',
        description: 'tempus semper est quam pharetra magna ac consequat',
        user_id: 21
      }, {
        name: 'aliquam sit amet diam',
        description: 'sapien iaculis congue vivamus metus arcu adipiscing molestie',
        user_id: 10
      }, {
        name: 'lectus vestibulum quam sapien',
        description: 'lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
        user_id: 37
      }, {
        name: 'aliquet massa id lobortis convallis',
        description: 'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
        user_id: 17
      }, {
        name: 'aliquet maecenas',
        description: 'penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
        user_id: 20
      }, {
        name: 'eros elementum pellentesque quisque porta',
        description: 'dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat',
        user_id: 42
      }, {
        name: 'metus arcu adipiscing molestie hendrerit',
        description: 'pede malesuada in imperdiet et commodo',
        user_id: 19
      }, {
        name: 'nisl aenean lectus',
        description: 'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
        user_id: 37
      }, {
        name: 'a suscipit nulla',
        description: 'vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend',
        user_id: 37
      }, {
        name: 'aliquet at feugiat non',
        description: 'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam',
        user_id: 26
      }, {
        name: 'mauris morbi non',
        description: 'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec',
        user_id: 48
      }, {
        name: 'fusce posuere',
        description: 'tellus nisi eu orci mauris lacinia sapien quis libero',
        user_id: 48
      }, {
        name: 'lectus',
        description: 'ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes',
        user_id: 27
      }, {
        name: 'gravida nisi at nibh in',
        description: 'at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat',
        user_id: 12
      }, {
        name: 'vel',
        description: 'vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget',
        user_id: 27
      }, {
        name: 'nulla quisque',
        description: 'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend',
        user_id: 42
      }, {
        name: 'odio curabitur convallis duis',
        description: 'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui',
        user_id: 25
      }, {
        name: 'tortor risus dapibus',
        description: 'erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis',
        user_id: 27
      }, {
        name: 'donec ut dolor',
        description: 'vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor',
        user_id: 41
      }, {
        name: 'in magna bibendum imperdiet',
        description: 'elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien',
        user_id: 10
      }])
    })
}
