const express = require('express')
const bodyParser = require('body-parser');
const { addRecipeIngredient } = require('./db/db')

const app = express()
app.use(bodyParser.json())

app.listen(3000, () =>
  console.log('Baking up a storm on port 3000!')
)
