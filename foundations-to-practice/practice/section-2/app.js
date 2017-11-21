const express = require('express')
const bodyParser = require('body-parser');
const { getAllFlavors, addChunk } = require('./db/db')

const app = express()
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.listen(3000, () =>
  console.log('Scooping out ice cream on port 3000!')
)
