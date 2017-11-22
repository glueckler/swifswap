const moment = require('moment')

const m1c1first = moment([2017, 10, 14, 12]).format()

const m2c1 =  moment(m1c1first).add(1, 'minute').format()

const m3c1 = moment(m1c1first).add(2, 'minute').format()

const m4c2first = moment(m1c1first).add(3, 'minute').format()

const m5c3first = moment(m1c1first).add(4, 'minute').format()

const m6c3 = moment(m1c1first).add(5, 'minute').format()

const m7c4first = moment(m1c1first).add(6, 'minute').format()

const m8c5first = moment(m1c1first).add(7, 'minute').format()

const m9c5 = moment(m1c1first).add(8, 'minute').format()

const m10c5 = moment(m1c1first).add(9, 'minute').format()

module.exports = {
  m1c1first,
  m2c1,
  m3c1,
  m4c2first,
  m5c3first,
  m6c3,
  m7c4first,
  m8c5first,
  m9c5,
  m10c5
}
