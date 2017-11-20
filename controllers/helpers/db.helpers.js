
const _ = require('lodash')

module.exports = {

  flattenQuery: function (arr) {
    if (arr.length === 0) {
      return arr
    }
    function customizer (objValue, srcValue) {
      if (objValue !== srcValue) {
        if (Array.isArray(objValue)) {
          if (!_.includes(objValue, srcValue)) {
            objValue.push(srcValue)
            return objValue
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
