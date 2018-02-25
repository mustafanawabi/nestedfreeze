# nestedfreeze
Javascript's [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) does not recursively freeze objects. This module does that for you.

`nestedfreeze` is performant. Click [here](https://jsperf.com/nestedfreeze-vs-deepfreeze/1) for a performance benchmark against [`deepfreeze`](https://github.com/serapath/deepfreeze/blob/master/index.js).

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

## Test
``` js
npm run test
```
