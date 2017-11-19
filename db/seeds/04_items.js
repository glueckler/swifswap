
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "id": 1,
        "name": "libero rutrum ac lobortis vel",
        "description": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
        "user_id": 49
      }, {
        "id": 2,
        "name": "consequat",
        "description": "ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in",
        "user_id": 18
      }, {
        "id": 3,
        "name": "pede libero quis",
        "description": "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
        "user_id": 48
      }, {
        "id": 4,
        "name": "blandit mi in porttitor",
        "description": "aliquet pulvinar sed nisl nunc rhoncus",
        "user_id": 33
      }, {
        "id": 5,
        "name": "eu felis fusce posuere",
        "description": "lectus pellentesque at nulla suspendisse",
        "user_id": 20
      }, {
        "id": 6,
        "name": "quisque erat",
        "description": "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
        "user_id": 23
      }, {
        "id": 7,
        "name": "adipiscing lorem vitae mattis",
        "description": "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
        "user_id": 35
      }, {
        "id": 8,
        "name": "blandit non interdum",
        "description": "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
        "user_id": 39
      }, {
        "id": 9,
        "name": "vestibulum ante ipsum",
        "description": "et ultrices posuere cubilia curae",
        "user_id": 22
      }, {
        "id": 10,
        "name": "velit eu est",
        "description": "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet",
        "user_id": 22
      }, {
        "id": 11,
        "name": "hendrerit at vulputate vitae nisl",
        "description": "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
        "user_id": 33
      }, {
        "id": 12,
        "name": "ipsum dolor sit amet consectetuer",
        "description": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
        "user_id": 18
      }, {
        "id": 13,
        "name": "natoque penatibus et",
        "description": "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
        "user_id": 25
      }, {
        "id": 14,
        "name": "lectus pellentesque eget nunc",
        "description": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        "user_id": 7
      }, {
        "id": 15,
        "name": "quam pharetra magna ac consequat",
        "description": "nullam sit amet turpis elementum ligula vehicula consequat morbi",
        "user_id": 38
      }, {
        "id": 16,
        "name": "nullam sit amet turpis elementum",
        "description": "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
        "user_id": 42
      }, {
        "id": 17,
        "name": "rhoncus aliquet pulvinar",
        "description": "odio curabitur convallis duis consequat dui nec nisi volutpat",
        "user_id": 20
      }, {
        "id": 18,
        "name": "rutrum rutrum neque",
        "description": "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
        "user_id": 13
      }, {
        "id": 19,
        "name": "quisque arcu",
        "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
        "user_id": 32
      }, {
        "id": 20,
        "name": "leo odio",
        "description": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
        "user_id": 27
      }, {
        "id": 21,
        "name": "ultrices posuere cubilia",
        "description": "justo lacinia eget tincidunt eget tempus vel pede morbi",
        "user_id": 9
      }, {
        "id": 22,
        "name": "nisl nunc rhoncus dui vel",
        "description": "praesent id massa id nisl venenatis lacinia aenean sit amet",
        "user_id": 21
      }, {
        "id": 23,
        "name": "eget rutrum at",
        "description": "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius",
        "user_id": 35
      }, {
        "id": 24,
        "name": "orci pede venenatis",
        "description": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
        "user_id": 38
      }, {
        "id": 25,
        "name": "cursus vestibulum",
        "description": "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        "user_id": 20
      }, {
        "id": 26,
        "name": "in purus eu magna",
        "description": "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
        "user_id": 25
      }, {
        "id": 27,
        "name": "lorem ipsum dolor sit amet",
        "description": "mauris morbi non lectus aliquam sit amet diam in magna bibendum",
        "user_id": 50
      }, {
        "id": 28,
        "name": "lectus in quam fringilla",
        "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
        "user_id": 35
      }, {
        "id": 29,
        "name": "est lacinia",
        "description": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
        "user_id": 28
      }, {
        "id": 30,
        "name": "erat",
        "description": "porta volutpat quam pede lobortis",
        "user_id": 31
      }, {
        "id": 31,
        "name": "ac consequat",
        "description": "platea dictumst morbi vestibulum velit",
        "user_id": 23
      }, {
        "id": 32,
        "name": "feugiat et",
        "description": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non",
        "user_id": 37
      }, {
        "id": 33,
        "name": "adipiscing molestie hendrerit at",
        "description": "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
        "user_id": 14
      }, {
        "id": 34,
        "name": "dapibus",
        "description": "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
        "user_id": 25
      }, {
        "id": 35,
        "name": "enim leo",
        "description": "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
        "user_id": 31
      }, {
        "id": 36,
        "name": "erat vestibulum",
        "description": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
        "user_id": 31
      }, {
        "id": 37,
        "name": "rutrum",
        "description": "vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
        "user_id": 42
      }, {
        "id": 38,
        "name": "tincidunt eget tempus vel pede",
        "description": "condimentum curabitur in libero ut massa volutpat convallis",
        "user_id": 30
      }, {
        "id": 39,
        "name": "imperdiet sapien urna",
        "description": "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
        "user_id": 25
      }, {
        "id": 40,
        "name": "congue risus semper",
        "description": "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
        "user_id": 8
      }, {
        "id": 41,
        "name": "ac",
        "description": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
        "user_id": 32
      }, {
        "id": 42,
        "name": "purus sit",
        "description": "primis in faucibus orci luctus et ultrices posuere cubilia",
        "user_id": 35
      }, {
        "id": 43,
        "name": "morbi vestibulum velit",
        "description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
        "user_id": 5
      }, {
        "id": 44,
        "name": "ipsum primis in faucibus orci",
        "description": "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
        "user_id": 37
      }, {
        "id": 45,
        "name": "in faucibus orci luctus et",
        "description": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
        "user_id": 10
      }, {
        "id": 46,
        "name": "porttitor lorem id",
        "description": "et commodo vulputate justo in blandit ultrices enim lorem",
        "user_id": 42
      }, {
        "id": 47,
        "name": "dapibus",
        "description": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
        "user_id": 43
      }, {
        "id": 48,
        "name": "aliquet",
        "description": "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
        "user_id": 13
      }, {
        "id": 49,
        "name": "blandit non interdum in ante",
        "description": "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
        "user_id": 45
      }, {
        "id": 50,
        "name": "interdum eu",
        "description": "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est",
        "user_id": 32
      }]);
    });
};
