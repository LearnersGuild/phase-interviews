const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/recipes')
db.connect()

/**
 * Get a recipe name from a recipe ID
 * @param  {number} recipeId id of the recipe for which to get the name
 * @return {Promise}         Promise resolving to a string of the recipe name
 */
const getRecipeName = recipeId =>
  db.one('SELECT name FROM recipes WHERE id=$1', [recipeId])
    .then(result => result.name)

/**
 * Get ingredients for a given recipeId, as a list of strings
 * @param  {number} recipeId id of the recipe for which to get the ingredients
 * @return {Promise}         Promise that resolves to an array of strings. Each
 *                              string is of the format:
 *                               <ingredient amt> <ingredient_units> <ingredient name>
 *                              for example:
 *                                '1 cup flour'
 */
const getRecipeIngredients = recipeId =>
  db.query(`
    SELECT i.name AS ingredient_name, ri.amount, ri.amount_units
    FROM recipes AS r
      JOIN recipe_ingredients AS ri
        ON r.id = ri.recipe_id
      JOIN ingredients AS i
        ON ri.ingredient_id = i.id
    WHERE r.id = $1`,
    [recipeId])
    .then(results => results.map(
      result => `${result.amount} ${result.amount_units} ${result.ingredient_name}`)
    )

module.exports = {
  getRecipeName,
  getRecipeIngredients,
}
