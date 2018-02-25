# nestedfreeze
Javascript's [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) does not recursively freeze objects. This module does that for you.

## Install
``` console
npm install nestedfreeze --save
```

## Usage
``` js
const freeze = require('nestedfreeze')

let obj = {
  foo: {
    baz: 'do esse esse et dolor'
  },
  bar: {
    qux: 'sit cupidatat anim occaecat elit'
  }
}

freeze(obj)

obj.foo.baz = 'change me'
console.log(obj.foo.baz) // do esse esse et dolor
```
