const items = function(db) {
  const i = {}
  i.sayHello = function() {
    console.log('hello from items controller')
  }

  i.testQuery = function() {
    db.select().from('items').then(results => { results.forEach(result => { console.log(result) } ) })
  }
    
  i.getItemById = function(id) {
    db.select().from('items').where({id: id}).then(results => { results.forEach(result => { console.log(result) } ) })
  }
  i.createItem = function() {
    db('items').insert({ id: 51, name: "shoehorn", description: "for helping ye put yer boots on"}).then(function (results) {console.log(results)})
  }
  return i
} 

module.exports = items
