const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/recipes')
db.connect()

/**
 * Associate a recipe with an ingredient, including amount and units of ingredient
 * @param {number} recipeId         id of the recipe for which to associate an ingredient
 * @param {number} ingredientName     name of ingredient to associate with the recipe
 *                                    NOTE: the query will fail if the ingredient does not
 *                                    already exist in the database
 * @param {number} ingredientAmount ingredient amount
 * @param {string} ingredientUnits  ingredient units (for example, "tsps" or "cups")
 * @returns {Promise} - Promise resolving to the INSERT output
 */
const addRecipeIngredient = (recipeId, ingredientName, ingredientAmount, ingredientUnits) =>
  db.one('SELECT id FROM ingredients WHERE name ILIKE $1', [ingredientName])
    .then(result => db.one(`
      INSERT INTO recipe_ingredients (recipe_id, ingredient_id, amount, amount_units)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [recipeId, result.id, ingredientAmount, ingredientUnits]))

module.exports = {
  addRecipeIngredient,
}
