
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([{
        content: 'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat',
        chat_id: 8,
        user_id: 33
      }, {
        content: 'interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu',
        chat_id: 38,
        user_id: 30
      }, {
        content: 'turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
        chat_id: 48,
        user_id: 39
      }, {
        content: 'quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea',
        chat_id: 30,
        user_id: 37
      }, {
        content: 'dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et',
        chat_id: 21,
        user_id: 37
      }, {
        content: 'sagittis sapien cum sociis natoque penatibus',
        chat_id: 21,
        user_id: 43
      }, {
        content: 'ante ipsum primis',
        chat_id: 9,
        user_id: 35
      }, {
        content: 'felis donec semper sapien a libero nam dui proin leo odio porttitor',
        chat_id: 33,
        user_id: 21
      }, {
        content: 'iaculis justo in',
        chat_id: 6,
        user_id: 37
      }, {
        content: 'proin at turpis',
        chat_id: 36,
        user_id: 48
      }, {
        content: 'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse',
        chat_id: 7,
        user_id: 34
      }, {
        content: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin',
        chat_id: 37,
        user_id: 35
      }, {
        content: 'porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh',
        chat_id: 23,
        user_id: 29
      }, {
        content: 'sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu',
        chat_id: 47,
        user_id: 17
      }, {
        content: 'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in',
        chat_id: 23,
        user_id: 24
      }, {
        content: 'erat tortor sollicitudin mi sit amet lobortis sapien sapien',
        chat_id: 20,
        user_id: 24
      }, {
        content: 'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna',
        chat_id: 3,
        user_id: 1
      }, {
        content: 'quis tortor',
        chat_id: 10,
        user_id: 23
      }, {
        content: 'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet',
        chat_id: 36,
        user_id: 7
      }, {
        content: 'porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
        chat_id: 42,
        user_id: 16
      }, {
        content: 'sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec',
        chat_id: 27,
        user_id: 6
      }, {
        content: 'quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
        chat_id: 8,
        user_id: 24
      }, {
        content: 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
        chat_id: 46,
        user_id: 16
      }, {
        content: 'tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
        chat_id: 28,
        user_id: 22
      }, {
        content: 'in felis eu sapien',
        chat_id: 5,
        user_id: 34
      }, {
        content: 'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
        chat_id: 49,
        user_id: 27
      }, {
        content: 'lorem ipsum dolor',
        chat_id: 40,
        user_id: 11
      }, {
        content: 'in est risus auctor sed tristique in tempus sit amet',
        chat_id: 2,
        user_id: 2
      }, {
        content: 'nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
        chat_id: 32,
        user_id: 9
      }, {
        content: 'donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio',
        chat_id: 24,
        user_id: 6
      }, {
        content: 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
        chat_id: 15,
        user_id: 28
      }, {
        content: 'in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
        chat_id: 32,
        user_id: 26
      }, {
        content: 'in tempus sit amet sem fusce consequat nulla nisl nunc',
        chat_id: 7,
        user_id: 42
      }, {
        content: 'etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
        chat_id: 23,
        user_id: 36
      }, {
        content: 'odio curabitur',
        chat_id: 12,
        user_id: 23
      }, {
        content: 'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean',
        chat_id: 24,
        user_id: 5
      }, {
        content: 'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc',
        chat_id: 43,
        user_id: 22
      }, {
        content: 'luctus ultricies eu nibh quisque id justo sit amet sapien',
        chat_id: 13,
        user_id: 42
      }, {
        content: 'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
        chat_id: 15,
        user_id: 14
      }, {
        content: 'quam pharetra magna ac consequat',
        chat_id: 8,
        user_id: 37
      }, {
        content: 'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor',
        chat_id: 38,
        user_id: 24
      }, {
        content: 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
        chat_id: 15,
        user_id: 40
      }, {
        content: 'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla',
        chat_id: 19,
        user_id: 23
      }, {
        content: 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam',
        chat_id: 31,
        user_id: 3
      }, {
        content: 'interdum in ante vestibulum ante ipsum primis in faucibus orci luctus',
        chat_id: 6,
        user_id: 2
      }, {
        content: 'quisque id justo sit',
        chat_id: 7,
        user_id: 24
      }, {
        content: 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan',
        chat_id: 2,
        user_id: 25
      }, {
        content: 'bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
        chat_id: 41,
        user_id: 3
      }, {
        content: 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
        chat_id: 21,
        user_id: 39
      }, {
        content: 'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
        chat_id: 28,
        user_id: 49
      }])
    })
}
