const { Map
      , List
      }                   = require('immutable')

const L                   = require('lazy.js')

const { IO 
      , Fail
      , Left
      , Either
      , Return
      , Identity
      }                   = require('monet')

const trace               = (x)       => { console.log(x); return x }

const timerWrap           = (f, arg)  => { console.time(`Func. executed in`); trace(f(arg)); console.timeEnd(`Func. executed in`) }

const factorial           = (x)       => x > 1 ? x * factorial(x - 1) : 1

const compare             = (x, y)    => y.reduce((acc, z) => acc && x.includes(z), true)                               // abiatec task

const orderedCompare      = (x, y)    => y.map((e, i) => x.slice(i).includes(e)).reduce((acc, z) => acc && z, true)     // abiatec task
                          
                          const first = new Promise((rs) => (IO(() => setTimeout(() => rs('Obtained data.'), 3000)))
                                                              .run()
                                                    )
                          
                          first.then((x) => trace(x))