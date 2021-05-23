const EXPRESS = require('express')

const { IO } = require('monet')

const {
  trace,
  solved,
  first
} = require('./index')

const app = EXPRESS()

app.listen(
  3000,
  async () => trace(await solved())
)
