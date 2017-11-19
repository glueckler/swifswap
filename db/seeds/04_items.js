
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "name": "adipiscing elit proin",
        "description": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa"
      }, {
        "name": "morbi",
        "description": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet"
      }, {
        "name": "lacinia eget tincidunt eget tempus",
        "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"
      }, {
        "name": "condimentum curabitur in libero",
        "description": "eget rutrum at lorem integer tincidunt ante"
      }, {
        "name": "quis odio consequat varius",
        "description": "nunc purus phasellus in felis"
      }, {
        "name": "faucibus cursus urna ut tellus",
        "description": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi"
      }, {
        "name": "scelerisque quam turpis adipiscing",
        "description": "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam"
      }, {
        "name": "sed nisl nunc",
        "description": "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede"
      }, {
        "name": "quam a odio",
        "description": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi"
      }, {
        "name": "at nunc commodo",
        "description": "pharetra magna vestibulum aliquet ultrices erat"
      }, {
        "name": "orci nullam",
        "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio"
      }, {
        "name": "luctus tincidunt nulla mollis",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit"
      }, {
        "name": "dolor sit amet consectetuer",
        "description": "potenti cras in purus eu magna vulputate luctus"
      }, {
        "name": "mauris sit",
        "description": "a nibh in quis justo maecenas rhoncus aliquam lacus"
      }, {
        "name": "amet eros suspendisse",
        "description": "aenean lectus pellentesque eget nunc donec quis orci eget orci"
      }, {
        "name": "quam nec",
        "description": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper"
      }, {
        "name": "tellus semper interdum mauris ullamcorper",
        "description": "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a"
      }, {
        "name": "vel ipsum praesent blandit lacinia",
        "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit"
      }, {
        "name": "sapien iaculis congue",
        "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non"
      }, {
        "name": "donec dapibus duis",
        "description": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla"
      }, {
        "name": "justo in",
        "description": "mauris enim leo rhoncus sed vestibulum sit amet cursus id"
      }, {
        "name": "ultrices posuere cubilia",
        "description": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum"
      }, {
        "name": "a ipsum integer a nibh",
        "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut"
      }, {
        "name": "eget elit sodales",
        "description": "ipsum aliquam non mauris morbi non lectus aliquam"
      }, {
        "name": "integer ac neque duis bibendum",
        "description": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo"
      }, {
        "name": "potenti cras in purus eu",
        "description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non"
      }, {
        "name": "maecenas",
        "description": "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
      }, {
        "name": "sem fusce consequat",
        "description": "vel ipsum praesent blandit lacinia"
      }, {
        "name": "in sagittis",
        "description": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus"
      }, {
        "name": "est congue elementum",
        "description": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac"
      }, {
        "name": "morbi",
        "description": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at"
      }, {
        "name": "pede justo lacinia eget",
        "description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed"
      }, {
        "name": "fermentum justo",
        "description": "ipsum primis in faucibus orci luctus et ultrices posuere"
      }, {
        "name": "etiam justo",
        "description": "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum"
      }, {
        "name": "dapibus augue",
        "description": "eget orci vehicula condimentum curabitur in libero ut massa volutpat"
      }, {
        "name": "varius integer",
        "description": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum"
      }, {
        "name": "venenatis",
        "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus"
      }, {
        "name": "diam",
        "description": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet"
      }, {
        "name": "viverra pede ac diam cras",
        "description": "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet"
      }, {
        "name": "donec semper sapien",
        "description": "justo eu massa donec dapibus duis at velit eu est"
      }, {
        "name": "fringilla",
        "description": "aliquet massa id lobortis convallis tortor risus dapibus augue"
      }, {
        "name": "sit amet consectetuer adipiscing elit",
        "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem"
      }, {
        "name": "vel ipsum praesent blandit lacinia",
        "description": "libero nam dui proin leo odio"
      }, {
        "name": "lorem vitae mattis nibh ligula",
        "description": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus"
      }, {
        "name": "ut nulla",
        "description": "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae"
      }, {
        "name": "congue etiam",
        "description": "pede ullamcorper augue a suscipit nulla elit ac nulla"
      }, {
        "name": "massa volutpat convallis",
        "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes"
      }, {
        "name": "erat",
        "description": "a pede posuere nonummy integer non velit donec diam"
      }, {
        "name": "amet nulla quisque arcu",
        "description": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend"
      }, {
        "name": "cubilia",
        "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet"
      }]);
    });
};
