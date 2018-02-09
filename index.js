const isPlainObject = require('is-object')

const nestedFreeze = (obj) => {
  Object.freeze(obj)

  Object.keys(obj).forEach((key) => {
    if (isPlainObject(obj[key]) && !Object.isFrozen(obj[key])) {
      nestedFreeze(obj[key])
    }
  })
}

module.exports = nestedFreeze
