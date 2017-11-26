# Foundations -> Practice Version 2 challenge

__Note__: Be sure to __read and follow the installation instructions__ in the `README.md` for the each *part-x* folder before completing that part.

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `getFlightCounts` that uses `pg-promise`. The function takes a `minFlights` parameter, and returns the names of all passengers who are associated with at least that many flights in the database.

  - [ ] __10:__ The function's query returns the name and flight count for passengers in the database.
  - [ ] __10:__ The function's query returns only the passengers who have a flight count greater than or equal to the `minFlights` parameter.
  - [ ] __10:__ The function returns a promise which resolves to the result of the query

## Part 2: Express

### GET route
Create a GET route for `/flight_counts` that receives GET data with the key `minFlights`, whose value is the minimum number of flights a passenger must have to be displayed on the page. Use the `getFlightCounts` function provided in `db.js` (no modifications need to be made to this function). Example JSON POST data:

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route accesses GET data
- [ ] __10:__ Route uses `getFlightCounts` to add the team to the database
- [ ] __10:__ Successful adding of the ingredient returns 200 status and JSON with the keys `ingredientId`, `ingredientAmount`, `IngredientUnits` and `recipeId` (and the appropriate values)
- [ ] __10:__ Unsuccessful adding of the ingredient returns 400 status and JSON containing the key `message` with an error message as the value.
- [ ] __10:__ Learner demonstrates GET route functionality using a browser.

## Part 3: Front-End

### DOM Manipulation
The `:recipeId/ingredients` route in this section has already been coded to display a recipe name and ingredients for a particular recipe id (try accessing this route with recipe id 1 to see it in action).

The challenge for this section: when the user mouses over an ingredient, the ingredient turns red. When the mouse is no longer over the ingredient, it reverts to black.

- [ ] __10:__ Each ingredient has a mouseover and a mouseout event listener.
- [ ] __10:__ The ingredient element is accessed in the callback function from the event listeners.
- [ ] __10:__ The ingredient element color turns red when moused over.
- [ ] __10:__ The ingredient element color reverts to black when the mouse is no longer over the element.
- [ ] __10:__ JavaScript is contained in `public/recipes.js` (not in the HTML file)
