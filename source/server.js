const EXPRESS = require('express')

const { IO } = require('monet')

const {
  trace,
  attachedInfo,
  resolvedPromise
} = require('./index')

const app = EXPRESS()

app.listen(
  3000,
  async () => trace(await resolvedPromise)
)
