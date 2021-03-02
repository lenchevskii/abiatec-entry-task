const { isArguments
      , isFinite
      , isEqual
      , compose
      , memoize
      , values
      , create
      , keys
      , map
      , has
      }                   = require('lodash/fp')

const { Map
      , List 
      }                   = require('immutable')

const L                   = require('lazy.js')

const trace               = (x)       => { console.log(x); return x }

const timerWrap           = (f, arg)  => { console.time(`Func. executed in`); trace(f(arg)); console.timeEnd(`Func. executed in`) }

const factorial           = (x)       => x > 1 ? x * factorial(x - 1) : 1

const compare             = ([x, y])  => y.reduce((acc, z) => acc && x.includes(z), true)                               // abiatec task

const orderedCompare      = (x, y)    => y.map((e, i) => x.slice(i).includes(e)).reduce((acc, z) => acc && z, true)     // abiatec task

const dct                 = { a: 'nesting level: 1', b: { c: 'nesting level: 2' } }

const tst                 = L.generate()  // lazy fibonacci

                          // trace(has('b.c', trace(dct)))

                          trace(tst.take(200).toArray())
                          
                          