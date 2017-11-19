const items = function(db) {
  const i = {}
  i.sayHello = function() {
    console.log('hello from items controller')
  }

  i.testQuery = function() {
    db.select().from('items').then(results => { results.forEach(result => { console.log(result) } ) })
  }
    
  return i
} 

module.exports = items