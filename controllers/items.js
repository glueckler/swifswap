const dbHelpers = require('./helpers/db.helpers.js')

const items = function (db) {
  const i = {}
  i.sayHello = function () {
    console.log('hello from items controller')
  }

  i.testQuery = function () {
    db.select().from('items').then(results => { results.forEach(result => { console.log(result) }) })
  }

  i.getItemById = async function (paramsId) {
    const itemsFull = await db('items').leftJoin('photos', 'items.id', 'photos.item_id').leftJoin('items_tags', 'items.id', 'items_tags.item_id').leftJoin('tags', 'items_tags.tag_id', 'tags.id').select('items.name', 'items.description', 'photos.img_path', 'tags.name as tagName').where('items.id', paramsId).then((data) => data)
    console.log(dbHelpers.flattenQuery(itemsFull))
    return dbHelpers.flattenQuery(itemsFull)
  }

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
