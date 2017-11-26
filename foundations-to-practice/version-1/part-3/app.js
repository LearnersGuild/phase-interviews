const express = require('express')
const { getRecipeName, getRecipeIngredients } = require('./db/db')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.get('/:recipeId/ingredients', (req, res) => {
  const recipeId = req.params.recipeId
  getRecipeName(recipeId)
    .then((recipeName) => {
      getRecipeIngredients(recipeId)
        .then((ingredients) => {
          res.render('recipes', { recipeName, ingredients })
        })
    })
    .catch(console.error)
})

app.listen(3000, () =>
  console.log('Baking up a storm on port 3000!')
)
