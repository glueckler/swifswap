
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([{
        content: 'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat',
        created_at: '2017-05-01 21:47:00',
        chat_id: 8,
        user_id: 33
      }, {
        content: 'interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu',
        created_at: '2016-12-31 11:48:10',
        chat_id: 38,
        user_id: 30
      }, {
        content: 'turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
        created_at: '2017-05-04 19:47:00',
        chat_id: 48,
        user_id: 39
      }, {
        content: 'quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea',
        created_at: '2017-02-07 12:38:17',
        chat_id: 30,
        user_id: 37
      }, {
        content: 'dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et',
        created_at: '2017-10-29 12:26:38',
        chat_id: 21,
        user_id: 37
      }, {
        content: 'sagittis sapien cum sociis natoque penatibus',
        created_at: '2017-01-06 10:57:20',
        chat_id: 21,
        user_id: 43
      }, {
        content: 'ante ipsum primis',
        created_at: '2016-12-08 02:05:55',
        chat_id: 9,
        user_id: 35
      }, {
        content: 'felis donec semper sapien a libero nam dui proin leo odio porttitor',
        created_at: '2017-07-13 16:46:11',
        chat_id: 33,
        user_id: 21
      }, {
        content: 'iaculis justo in',
        created_at: '2017-01-28 23:34:05',
        chat_id: 6,
        user_id: 37
      }, {
        content: 'proin at turpis',
        created_at: '2017-08-22 03:41:26',
        chat_id: 36,
        user_id: 48
      }, {
        content: 'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse',
        created_at: '2017-04-25 12:29:09',
        chat_id: 7,
        user_id: 34
      }, {
        content: 'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin',
        created_at: '2016-11-25 18:14:27',
        chat_id: 37,
        user_id: 35
      }, {
        content: 'porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh',
        created_at: '2017-02-14 20:10:59',
        chat_id: 23,
        user_id: 29
      }, {
        content: 'sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu',
        created_at: '2017-05-22 10:15:48',
        chat_id: 47,
        user_id: 17
      }, {
        content: 'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in',
        created_at: '2017-02-04 11:41:49',
        chat_id: 23,
        user_id: 24
      }, {
        content: 'erat tortor sollicitudin mi sit amet lobortis sapien sapien',
        created_at: '2017-02-17 15:19:11',
        chat_id: 20,
        user_id: 24
      }, {
        content: 'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna',
        created_at: '2017-06-19 19:15:21',
        chat_id: 3,
        user_id: 1
      }, {
        content: 'quis tortor',
        created_at: '2017-04-23 04:57:01',
        chat_id: 10,
        user_id: 23
      }, {
        content: 'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet',
        created_at: '2017-03-05 01:33:53',
        chat_id: 36,
        user_id: 7
      }, {
        content: 'porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
        created_at: '2017-06-20 05:33:01',
        chat_id: 42,
        user_id: 16
      }, {
        content: 'sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec',
        created_at: '2017-03-08 16:15:41',
        chat_id: 27,
        user_id: 6
      }, {
        content: 'quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
        created_at: '2017-11-12 03:25:22',
        chat_id: 8,
        user_id: 24
      }, {
        content: 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
        created_at: '2017-09-25 08:35:19',
        chat_id: 46,
        user_id: 16
      }, {
        content: 'tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
        created_at: '2017-03-27 01:41:18',
        chat_id: 28,
        user_id: 22
      }, {
        content: 'in felis eu sapien',
        created_at: '2017-08-07 18:40:36',
        chat_id: 5,
        user_id: 34
      }, {
        content: 'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
        created_at: '2017-10-11 07:26:25',
        chat_id: 49,
        user_id: 27
      }, {
        content: 'lorem ipsum dolor',
        created_at: '2017-01-05 17:32:24',
        chat_id: 40,
        user_id: 11
      }, {
        content: 'in est risus auctor sed tristique in tempus sit amet',
        created_at: '2017-05-09 14:58:00',
        chat_id: 2,
        user_id: 2
      }, {
        content: 'nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
        created_at: '2017-10-22 04:21:36',
        chat_id: 32,
        user_id: 9
      }, {
        content: 'donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio',
        created_at: '2017-02-05 12:48:54',
        chat_id: 24,
        user_id: 6
      }, {
        content: 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
        created_at: '2017-09-22 06:46:49',
        chat_id: 15,
        user_id: 28
      }, {
        content: 'in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
        created_at: '2017-03-01 11:05:15',
        chat_id: 32,
        user_id: 26
      }, {
        content: 'in tempus sit amet sem fusce consequat nulla nisl nunc',
        created_at: '2016-12-19 19:26:37',
        chat_id: 7,
        user_id: 42
      }, {
        content: 'etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
        created_at: '2016-11-25 15:39:02',
        chat_id: 23,
        user_id: 36
      }, {
        content: 'odio curabitur',
        created_at: '2017-04-09 10:24:18',
        chat_id: 12,
        user_id: 23
      }, {
        content: 'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean',
        created_at: '2017-03-30 08:55:07',
        chat_id: 24,
        user_id: 5
      }, {
        content: 'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc',
        created_at: '2017-04-08 07:27:40',
        chat_id: 43,
        user_id: 22
      }, {
        content: 'luctus ultricies eu nibh quisque id justo sit amet sapien',
        created_at: '2017-01-23 04:31:50',
        chat_id: 13,
        user_id: 42
      }, {
        content: 'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
        created_at: '2017-03-14 03:53:17',
        chat_id: 15,
        user_id: 14
      }, {
        content: 'quam pharetra magna ac consequat',
        created_at: '2017-03-14 13:42:40',
        chat_id: 8,
        user_id: 37
      }, {
        content: 'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor',
        created_at: '2017-07-18 17:13:42',
        chat_id: 38,
        user_id: 24
      }, {
        content: 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
        created_at: '2016-11-12 06:35:46',
        chat_id: 15,
        user_id: 40
      }, {
        content: 'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla',
        created_at: '2017-04-22 14:25:17',
        chat_id: 19,
        user_id: 23
      }, {
        content: 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam',
        created_at: '2017-03-02 23:18:42',
        chat_id: 31,
        user_id: 3
      }, {
        content: 'interdum in ante vestibulum ante ipsum primis in faucibus orci luctus',
        created_at: '2017-10-28 22:16:35',
        chat_id: 6,
        user_id: 2
      }, {
        content: 'quisque id justo sit',
        created_at: '2017-04-04 16:27:43',
        chat_id: 7,
        user_id: 24
      }, {
        content: 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan',
        created_at: '2017-02-08 17:49:01',
        chat_id: 2,
        user_id: 25
      }, {
        content: 'bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
        created_at: '2017-08-27 01:39:26',
        chat_id: 41,
        user_id: 3
      }, {
        content: 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
        created_at: '2017-07-02 11:08:14',
        chat_id: 21,
        user_id: 39
      }, {
        content: 'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
        created_at: '2017-02-26 17:33:45',
        chat_id: 28,
        user_id: 49
      }])
    })
}
