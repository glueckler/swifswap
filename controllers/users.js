const users = function (db) {
  const u = {}
  u.example = function () {
    console.log('this is totally an example')
  }

  return u
}

module.exports = users
