const dbHelpers = require('./db-helpers/db.helpers.js')

const items = function (db) {
  const i = {}

  i.getItemById = async function (paramsId) {
    const itemsFull = await db('items')
      .leftJoin('items_tags', 'items.id', 'items_tags.item_id')
      .leftJoin('tags', 'items_tags.tag_id', 'tags.id')
      .select(
        'items.id',
        'items.name',
        'items.description',
        'items.img_path',
        'items.user_id',
        'tags.name as tagName'
      )
      .where('items.id', '5')
      .then(data => data)
      .catch(err => console.log('Error in items controller (getItemById).. ', err))
    console.log(itemsFull)
    return dbHelpers.flattenQuery(itemsFull)
  }

  i.createItem = async function (ctx) {
    // todo: fix this hardcoded user scene..
    const userId = '5'

    const postBody = ctx.request.body
    const { name, description, imageUrl, tags } = postBody

    const itemId = await db.insert({
      name,
      description,
      user_id: userId,
      img_path: imageUrl
    }, 'id').into('items')
      .then(id => parseInt(id, 10))

    const tagIds = await dbHelpers.getTagIdsByTagName(db, tags)
    const insertTags = tagIds.map(a => { return { item_id: itemId, tag_id: a } })
    await db.insert(insertTags).into('items_tags')

    ctx.body = 'Posted at item_id ' + itemId
    return ctx
  }

  i.getHomePageItems = async function (ctx) {
    const homepageQuery = await db.select().from('items').limit(50).orderBy('created_at', 'desc')
    ctx.body = homepageQuery
  }

  return i
}

module.exports = items
