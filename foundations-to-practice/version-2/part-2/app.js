const express = require('express')
const { getFlightCounts } = require('./db/db')

const app = express()
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.listen(3000, () =>
  console.log('Flying high on port 3000!')
)
