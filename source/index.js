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
                          
                          const first = new Promise((rs) => IO(() => trace('3000 Timer'))
                                                              .takeRight(IO(() => setTimeout(() => trace('3000 timer is over.'), 3000)))
                                                              .run()
                                                    )

                          const second = first.then(IO(() => trace('3000 Timer'))
                                                              .takeRight(IO(() => setTimeout(() => trace('3000 timer is over.'), 3000)))
                                                              .run()
                                                          )
                          