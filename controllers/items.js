const items = function (db) {
  const i = {};
  i.sayHello = function () {
    console.log('hello from items controller')
  }

  i.testQuery = function () {
    db
      .select()
      .from('items')
      .then(results => {
        results.forEach(result => {
          console.log(result)
        })
      })
  }

  i.getItemById = async function (id) {
    // return db.select().from('items').join('photos', 'items.id', 'photos.item_id').where({ 'items.id': id })
    // return db.select().from('items').join('photos', 'items.id', 'photos.item_id').join('items_tags AS i_t', 'items.id', 'i_t.item_id').where({ 'items.id': id })
    return db
      .select(
        'items.name',
        'items.description',
        'users.username',
        'users.location',
        't.name AS tag_name',
        'photos.img_path'
      )
      .from('items')
      .fullOuterJoin('photos', 'items.id', 'photos.item_id')
      .fullOuterJoin('items_tags AS i_t', 'items.id', 'i_t.item_id')
      .fullOuterJoin('tags AS t', 't.id', 'i_t.tag_id')
      .fullOuterJoin('users', 'users.id', 'items.user_id')
      .where({ 'items.id': id });
  };

  i.createItem = async function (item) {
    const { name, description } = item
    await db
      .insert({
        name,
        description
      })
      .into('items')
  }

  return i
}

module.exports = items

function type (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
