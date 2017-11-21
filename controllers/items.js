const dbHelpers = require('./helpers/db.helpers.js')

const items = function (db) {
  const i = {}
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

  i.getItemById = async function (paramsId) {
    const itemsFull = await db('items')
      .leftJoin('photos', 'items.id', 'photos.item_id')
      .leftJoin('items_tags', 'items.id', 'items_tags.item_id')
      .leftJoin('tags', 'items_tags.tag_id', 'tags.id')
      .select(
        'items.name',
        'items.description',
        'photos.img_path',
        'tags.name as tagName'
      )
      .where('items.id', paramsId)
      .then(data => data)
    return dbHelpers.flattenQuery(itemsFull)
  }

  i.createItem = async function (ctx) {
    const postBody = ctx.request.body
    const userId = '5'
    const { name, description, imageUrls, tags } = postBody

    const itemId = await db.insert({
      name,
      description,
      user_id: userId
    }, 'id').into('items')
      .then(id => parseInt(id, 10))
    
    const insertImageUrls = imageUrls.map(a => { return { item_id: itemId, img_path: a } })
    await db.insert(insertImageUrls).into('photos')

    const tagIds = await dbHelpers.getTagIdsByTagName(db, tags)
    const insertTags = tagIds.map(a => { return { item_id: itemId, tag_id: a } })
    await db.insert(insertTags).into('items_tags')
  }

  return i
}

module.exports = items
