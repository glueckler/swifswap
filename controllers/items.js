const items = function (db) {
  const i = {}
  i.sayHello = function () {
    console.log('hello from items controller')
  }

  i.testQuery = function () {
    db.select().from('items').then(results => { results.forEach(result => { console.log(result) }) })
  }

  i.getItemById = async function (id) {
    return db.select().from('items').where({ id })
  }
  i.createItem = async function () {
    return db('items')
      .insert({ name: 'test', description: 'test', user_id: 4 })
  }
  i.updateItem = async function (id) {
    return db('items').where('id', id)
      .update({name: 'testing update',
               description: 'this good stuff',
               user_id: 10
              })
  }
  i.deleteItem = async function () {
    return db('items')
  }
  return i
}

module.exports = items

function type (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
