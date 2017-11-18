
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "id": 1,
        "name": "adipiscing elit proin",
        "description": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa"
      }, {
        "id": 2,
        "name": "morbi",
        "description": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet"
      }, {
        "id": 3,
        "name": "lacinia eget tincidunt eget tempus",
        "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"
      }, {
        "id": 4,
        "name": "condimentum curabitur in libero",
        "description": "eget rutrum at lorem integer tincidunt ante"
      }, {
        "id": 5,
        "name": "quis odio consequat varius",
        "description": "nunc purus phasellus in felis"
      }, {
        "id": 6,
        "name": "faucibus cursus urna ut tellus",
        "description": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi"
      }, {
        "id": 7,
        "name": "scelerisque quam turpis adipiscing",
        "description": "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam"
      }, {
        "id": 8,
        "name": "sed nisl nunc",
        "description": "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede"
      }, {
        "id": 9,
        "name": "quam a odio",
        "description": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi"
      }, {
        "id": 10,
        "name": "at nunc commodo",
        "description": "pharetra magna vestibulum aliquet ultrices erat"
      }, {
        "id": 11,
        "name": "orci nullam",
        "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio"
      }, {
        "id": 12,
        "name": "luctus tincidunt nulla mollis",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit"
      }, {
        "id": 13,
        "name": "dolor sit amet consectetuer",
        "description": "potenti cras in purus eu magna vulputate luctus"
      }, {
        "id": 14,
        "name": "mauris sit",
        "description": "a nibh in quis justo maecenas rhoncus aliquam lacus"
      }, {
        "id": 15,
        "name": "amet eros suspendisse",
        "description": "aenean lectus pellentesque eget nunc donec quis orci eget orci"
      }, {
        "id": 16,
        "name": "quam nec",
        "description": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper"
      }, {
        "id": 17,
        "name": "tellus semper interdum mauris ullamcorper",
        "description": "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a"
      }, {
        "id": 18,
        "name": "vel ipsum praesent blandit lacinia",
        "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit"
      }, {
        "id": 19,
        "name": "sapien iaculis congue",
        "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non"
      }, {
        "id": 20,
        "name": "donec dapibus duis",
        "description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla"
      }, {
        "id": 21,
        "name": "justo in",
        "description": "mauris enim leo rhoncus sed vestibulum sit amet cursus id"
      }, {
        "id": 22,
        "name": "ultrices posuere cubilia",
        "description": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum"
      }, {
        "id": 23,
        "name": "a ipsum integer a nibh",
        "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut"
      }, {
        "id": 24,
        "name": "eget elit sodales",
        "description": "ipsum aliquam non mauris morbi non lectus aliquam"
      }, {
        "id": 25,
        "name": "integer ac neque duis bibendum",
        "description": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
      }, {
        "id": 26,
        "name": "potenti cras in purus eu",
        "description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non"
      }, {
        "id": 27,
        "name": "maecenas",
        "description": "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
      }, {
        "id": 28,
        "name": "sem fusce consequat",
        "description": "vel ipsum praesent blandit lacinia"
      }, {
        "id": 29,
        "name": "in sagittis",
        "description": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus"
      }, {
        "id": 30,
        "name": "est congue elementum",
        "description": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac"
      }, {
        "id": 31,
        "name": "morbi",
        "description": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at"
      }, {
        "id": 32,
        "name": "pede justo lacinia eget",
        "description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed"
      }, {
        "id": 33,
        "name": "fermentum justo",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere"
      }, {
        "id": 34,
        "name": "etiam justo",
        "description": "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum"
      }, {
        "id": 35,
        "name": "dapibus augue",
        "description": "eget orci vehicula condimentum curabitur in libero ut massa volutpat"
      }, {
        "id": 36,
        "name": "varius integer",
        "description": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum"
      }, {
        "id": 37,
        "name": "venenatis",
        "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus"
      }, {
        "id": 38,
        "name": "diam",
        "description": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet"
      }, {
        "id": 39,
        "name": "viverra pede ac diam cras",
        "description": "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet"
      }, {
        "id": 40,
        "name": "donec semper sapien",
        "description": "justo eu massa donec dapibus duis at velit eu est"
      }, {
        "id": 41,
        "name": "fringilla",
        "description": "aliquet massa id lobortis convallis tortor risus dapibus augue"
      }, {
        "id": 42,
        "name": "sit amet consectetuer adipiscing elit",
        "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem"
      }, {
        "id": 43,
        "name": "vel ipsum praesent blandit lacinia",
        "description": "libero nam dui proin leo odio"
      }, {
        "id": 44,
        "name": "lorem vitae mattis nibh ligula",
        "description": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus"
      }, {
        "id": 45,
        "name": "ut nulla",
        "description": "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae"
      }, {
        "id": 46,
        "name": "congue etiam",
        "description": "pede ullamcorper augue a suscipit nulla elit ac nulla"
      }, {
        "id": 47,
        "name": "massa volutpat convallis",
        "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes"
      }, {
        "id": 48,
        "name": "erat",
        "description": "a pede posuere nonummy integer non velit donec diam"
      }, {
        "id": 49,
        "name": "amet nulla quisque arcu",
        "description": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend"
      }, {
        "id": 50,
        "name": "cubilia",
        "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet"
      }]);
    });
};
