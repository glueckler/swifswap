
const _ = require('lodash')

module.exports = {

  flattenQuery: function (arr) {
    if (arr.length === 0) {
      return arr
    }
    function customizer (objValue, srcValue) {
      console.log('obj', objValue)
      console.log('src', srcValue)
      if (objValue !== srcValue) {
        if (Array.isArray(objValue)) {
          if (!_.includes(objValue, srcValue)) {
            return objValue.push(srcValue)
          }
        } else {
          return [objValue, srcValue]
        }
      }

      return objValue
    }
    return arr.reduce((a, b) => {
      return _.mergeWith(a, b, customizer)
    })
  }

}
