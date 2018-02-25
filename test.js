/* eslint-env mocha */
const should = require('should')
const nestedfreeze = require('./')

describe('Nestedfreeze', () => {
  it('call nestedfreeze with an object that has nested objects and check that all objects are frozen', () => {
    let obj = {
      o1: {
        o1p1: 'officia zant',
        o1p2: 'ea dolore'
      },
      o2: {
        o2o1: {
          o2o1o1: {
            o2o1o1p1: 'cupidatat adipisicing',
            o2o1o1p2: 'excepteur ipsum'
          }
        },
        o2o2: {
          o2o2o1: {
            o2o2o1o1: {
              o2o2o1o1p1: 'est dolore'
            },
            o2o2o1o2: {
              o2o2o1o2o1: {
                o2o2o1o2o1p1: 'qui dolore'
              }
            }
          }
        },
        o2o3: {
          o2o3p1: 'consectetur in', o2o3p2: 'reprehenderit eiusmod', o2o3p3: 'aliqua cillum'
        }
      },
      o4: () => { },
      o3: 12345
    }

    nestedfreeze(obj)

    // try to modify the object's properties
    let text = 'I am new text'
    obj.o1.o1p1 = text
    obj.o2.o2o1.o2o1o1.o2o1o1p2 = text
    obj.o2.o2o2.o2o2o1.o2o2o1o1.o2o2o1o1p1 = text
    obj.o2.o2o2.o2o2o1.o2o2o1o2.o2o2o1o2o1.o2o2o1o2o1p1 = text
    obj.o2.o2o3.o2o3p3 = text
    obj.o3 = text

    // object properties should remain unchanged
    should.equal(obj.o1.o1p1, 'officia zant')
    should.equal(obj.o2.o2o1.o2o1o1.o2o1o1p2, 'excepteur ipsum')
    should.equal(obj.o2.o2o2.o2o2o1.o2o2o1o1.o2o2o1o1p1, 'est dolore')
    should.equal(obj.o2.o2o2.o2o2o1.o2o2o1o2.o2o2o1o2o1.o2o2o1o2o1p1, 'qui dolore')
    should.equal(obj.o2.o2o3.o2o3p3, 'aliqua cillum')
    should.equal(obj.o3, 12345)
  })
})
