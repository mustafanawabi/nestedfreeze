const isObject = require('is-object')

const nestedFreeze = (obj) => {
  Object.freeze(obj)

  Object.keys(obj).forEach((key) => {
    if (isObject(obj[key]) && !Object.isFrozen(obj[key])) {
      nestedFreeze(obj[key])
    }
  })
}

module.exports = nestedFreeze
