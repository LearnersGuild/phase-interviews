# Foundations -> Practice Version 1 challenge

__Note__: Be sure to __read and follow the installation instructions__ in the `README.md` for the each *part-x* folder before completing that part.

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `addRecipeIngredient` that uses `pg-promise`. The function should take these parameters:

  - recipe id
  - ingredient name
  - ingredient amount
  - ingredient units (for example, "tsps" or "cups")

The function should return a promise resolving to the result of the insert query.

__Notes__:

  - For the purposes of this challenge, you can assume an ingredient with the given name _already exists_ in the db. 

  - You will need to write *two* queries here: one to get the ingredient id, and one to insert the data into the table.

__Specifications__:

  - [ ] __5:__ The function accepts the id of a recipe, the ingredient name, the ingredient amount, and the ingredient units as arguments
  - [ ] __10:__ The function executes a query which gets the ingredient id for the given ingredient name
  - [ ] __10:__ The function executes another query which associates the ingredient id, amount and units with the given recipe id
  - [ ] __10:__ The function returns a promise which resolves to the result of the insert query

## Part 2: Express

### POST route
Create a POST route for `/:recipeId/ingredients/add` that receives JSON data and adds a new team to the database. Use the `addRecipeIngredient` function provided in `db.js` (no modifications need to be made to this function). Example JSON POST data:

```
{
  "ingredientName": "chocolate chips",
  "ingredientAmount": 1,
  "ingredientUnits": "cup"
}
```

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses `addRecipeIngredient` to update to the database
- [ ] __10:__ Successful adding of the ingredient returns 200 status and JSON with the keys `ingredientId`, `ingredientAmount`, `ingredientUnits` and `recipeId` (and the appropriate values)
- [ ] __10:__ Unsuccessful adding of the ingredient returns 400 status and JSON containing the key `message` with an error message as the value.
- [ ] __10:__ Learner demonstrates POST route functionality using Postman, curl, or the like as a client.

## Part 3: Front-End

### DOM Manipulation
The `/:recipeId/ingredients` route in this section has already been coded to display a recipe name and ingredients for a particular recipe id. You will need to uncomment the line using your chosen template (Pug or EJS) before the server will work. Try accessing this route with recipe id 2 now to see it in action.

The challenge for this section: when the user mouses over an ingredient, the ingredient turns red. When the mouse is no longer over the ingredient, it reverts to black.

- [ ] __10:__ Each ingredient has a mouseover and a mouseout event listener.
- [ ] __10:__ The ingredient element is accessed in the callback function from the event listeners.
- [ ] __10:__ The ingredient element background color turns light gray (#eee) when moused over.
- [ ] __10:__ The ingredient element background color reverts to white when the mouse is no longer over the element.
- [ ] __10:__ JavaScript is contained in `public/recipes.js` (not in the HTML file)
