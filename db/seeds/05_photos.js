
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([{
        "item_id": 27,
        "img_path": "http://dummyimage.com/187x114.png/ff4444/ffffff"
      }, {
        "item_id": 34,
        "img_path": "http://dummyimage.com/150x219.jpg/cc0000/ffffff"
      }, {
        "item_id": 1,
        "img_path": "http://dummyimage.com/212x142.jpg/5fa2dd/ffffff"
      }, {
        "item_id": 35,
        "img_path": "http://dummyimage.com/235x225.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 23,
        "img_path": "http://dummyimage.com/234x176.bmp/dddddd/000000"
      }, {
        "item_id": 7,
        "img_path": "http://dummyimage.com/154x141.bmp/dddddd/000000"
      }, {
        "item_id": 50,
        "img_path": "http://dummyimage.com/174x217.png/5fa2dd/ffffff"
      }, {
        "item_id": 33,
        "img_path": "http://dummyimage.com/103x193.bmp/cc0000/ffffff"
      }, {
        "item_id": 33,
        "img_path": "http://dummyimage.com/216x226.png/cc0000/ffffff"
      }, {
        "item_id": 25,
        "img_path": "http://dummyimage.com/187x211.bmp/dddddd/000000"
      }, {
        "item_id": 13,
        "img_path": "http://dummyimage.com/194x248.jpg/cc0000/ffffff"
      }, {
        "item_id": 20,
        "img_path": "http://dummyimage.com/107x175.png/cc0000/ffffff"
      }, {
        "item_id": 26,
        "img_path": "http://dummyimage.com/200x206.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 9,
        "img_path": "http://dummyimage.com/137x132.bmp/cc0000/ffffff"
      }, {
        "item_id": 16,
        "img_path": "http://dummyimage.com/244x228.jpg/5fa2dd/ffffff"
      }, {
        "item_id": 23,
        "img_path": "http://dummyimage.com/161x179.png/dddddd/000000"
      }, {
        "item_id": 14,
        "img_path": "http://dummyimage.com/232x219.bmp/dddddd/000000"
      }, {
        "item_id": 32,
        "img_path": "http://dummyimage.com/166x142.png/dddddd/000000"
      }, {
        "item_id": 5,
        "img_path": "http://dummyimage.com/156x134.jpg/dddddd/000000"
      }, {
        "item_id": 9,
        "img_path": "http://dummyimage.com/177x100.png/5fa2dd/ffffff"
      }, {
        "item_id": 27,
        "img_path": "http://dummyimage.com/248x183.bmp/dddddd/000000"
      }, {
        "item_id": 22,
        "img_path": "http://dummyimage.com/127x229.png/ff4444/ffffff"
      }, {
        "item_id": 13,
        "img_path": "http://dummyimage.com/107x136.jpg/dddddd/000000"
      }, {
        "item_id": 22,
        "img_path": "http://dummyimage.com/168x154.bmp/ff4444/ffffff"
      }, {
        "item_id": 10,
        "img_path": "http://dummyimage.com/176x207.png/dddddd/000000"
      }, {
        "item_id": 48,
        "img_path": "http://dummyimage.com/158x234.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 48,
        "img_path": "http://dummyimage.com/129x189.jpg/ff4444/ffffff"
      }, {
        "item_id": 36,
        "img_path": "http://dummyimage.com/128x113.png/ff4444/ffffff"
      }, {
        "item_id": 17,
        "img_path": "http://dummyimage.com/165x130.jpg/5fa2dd/ffffff"
      }, {
        "item_id": 39,
        "img_path": "http://dummyimage.com/210x242.jpg/dddddd/000000"
      }, {
        "item_id": 36,
        "img_path": "http://dummyimage.com/160x127.bmp/dddddd/000000"
      }, {
        "item_id": 29,
        "img_path": "http://dummyimage.com/167x176.bmp/cc0000/ffffff"
      }, {
        "item_id": 7,
        "img_path": "http://dummyimage.com/197x119.jpg/dddddd/000000"
      }, {
        "item_id": 31,
        "img_path": "http://dummyimage.com/156x209.bmp/dddddd/000000"
      }, {
        "item_id": 17,
        "img_path": "http://dummyimage.com/142x190.bmp/ff4444/ffffff"
      }, {
        "item_id": 14,
        "img_path": "http://dummyimage.com/116x102.jpg/ff4444/ffffff"
      }, {
        "item_id": 31,
        "img_path": "http://dummyimage.com/194x115.png/dddddd/000000"
      }, {
        "item_id": 38,
        "img_path": "http://dummyimage.com/241x224.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 30,
        "img_path": "http://dummyimage.com/108x119.jpg/cc0000/ffffff"
      }, {
        "item_id": 33,
        "img_path": "http://dummyimage.com/177x233.bmp/ff4444/ffffff"
      }, {
        "item_id": 42,
        "img_path": "http://dummyimage.com/221x222.bmp/cc0000/ffffff"
      }, {
        "item_id": 18,
        "img_path": "http://dummyimage.com/224x238.bmp/cc0000/ffffff"
      }, {
        "item_id": 10,
        "img_path": "http://dummyimage.com/117x232.png/dddddd/000000"
      }, {
        "item_id": 4,
        "img_path": "http://dummyimage.com/189x108.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 33,
        "img_path": "http://dummyimage.com/143x121.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 12,
        "img_path": "http://dummyimage.com/151x106.jpg/dddddd/000000"
      }, {
        "item_id": 3,
        "img_path": "http://dummyimage.com/119x249.jpg/ff4444/ffffff"
      }, {
        "item_id": 7,
        "img_path": "http://dummyimage.com/222x165.bmp/5fa2dd/ffffff"
      }, {
        "item_id": 2,
        "img_path": "http://dummyimage.com/248x246.png/ff4444/ffffff"
      }, {
        "item_id": 39,
        "img_path": "http://dummyimage.com/184x166.png/cc0000/ffffff"
      }]);
    });
};
