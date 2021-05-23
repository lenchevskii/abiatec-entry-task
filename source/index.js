const { Map
      , List
      }                   = require('immutable')

const L                   = require('lazy.js')
const R                   = require('ramda')

const { IO 
      , Fail
      , Left
      , Either
      , Return
      , Identity
      }                   = require('monet')

const trace               = (x)       => { console.log(x); return x }

const timerWrap           = (f, ...arg)  => { console.time(`Func. executed in`); f(...arg); console.timeEnd(`Func. executed in`) }

const factorial           = (x)       => x > 1 ? x * factorial(x - 1) : 1

const compare             = (x, y)    => y.reduce((acc, z) => acc && x.includes(z), true)                               // abiatec task

const orderedCompare      = (x, y)    => y.map((e, i) => x.slice(i).includes(e)).reduce((acc, z) => acc && z, true)     // abiatec task
                          
                          const first = new Promise(
                            (rs) => IO(() => setTimeout(() => rs('Obtained data.'), 3000))
                                                              // .takeRight(IO(() => setTimeout(() => rs('Obtained data.'), 3000)))
                                                              .run()
                                                    )
                          
                          // first.then((x) => trace(x))

                          const solved = async () => await first

                          // console.log(
                          //   (async () => {
                          //     const res = Promise.resolve(await first)
                          //     return trace(await res)
                          //   })()
                          // )

                          class ExpressJS {
                            constructor(fst, snd){
                              this.fst = fst
                              this.snd = snd
                            }

                            fire(firstLevel) {
                              return (async (x) => await x)(firstLevel)
                            }
                          }

                          const app = new ExpressJS()

                          // trace(app.fire(Promise.resolve(first)))

                          // trace(Promise.resolve(solved()))

                          const arr = [
                            { time: '10:15', destination: 'Berlin', cost: 200.0 },
                            { time: '05:15', destination: 'Prague', cost: 120.0 },
                            { time: '12:20', destination: 'Moscow', cost: 100.0 },
                            { time: '20:00', destination: 'Berlin', cost: 200.0 },
                            { time: '10:10', destination: 'Berlin', cost: 200.0 },
                          ]

                          const sorted = 
                            (collection) => 
                              [...collection].sort((a, b) => Number(a.time.slice(0, 2)) - Number(b.time.slice(0, 2)))

                          // trace(sorted)

                          const sortedRam = R.curry(R.sort)((a, b) => Number(a.time.slice(0, 2)) - Number(b.time.slice(0, 2)))

                          timerWrap(sorted, arr)

module.exports = { trace }
