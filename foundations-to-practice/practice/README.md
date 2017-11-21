# Foundations -> Practice practice challenge

## Notes on this Practice challenge (please read carefully)

- This is intended to give you an idea of the type of tasks you will be asked to do for the live coding interview.

- You may choose either pug or ejs as a template engine.

- The live coding interview will have all the same sections as this practice exam, but the exact tasks will vary. For example, you may be asked to implement a different HTML feature or change a different CSS property. Or you may be asked to utilize GET data instead of POST data in the Express section.

- Refer to the (TODO: some link here) list of topics covered to understand the possible range of topics.

## Part 1: SQL

### SQL Query
Write a query to obtain the following data:

  - [ ] __20:__ Names of all flavors that contain chocolate chips.

### Node and PostgreSQL
Create a function in `db.js` called `getFlavors` that uses `pg-promise`.

  - [ ] __5:__ Function takes the name of a chunk
  - [ ] __10:__ Function executes the query successfully for the given chunk name
  - [ ] __10:__ Function returns a promise resolving to an array with the names of flavors containing the specified chunk

## Part 2: Express

### GET route
Create a GET route for `/flavors` that renders ice cream flavor names. Use the `getAllFlavors` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route uses getIcecreamFlavors to get the necessary data
- [ ] __10:__ Route renders `flavors.pug` OR `flavors.ejs` template with the ice cream flavors from the db

### POST route
Create a POST route for `/chunk/add` that adds a new chunk to the database. Use the `addChunk` function provided in `db.js`.

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses addChunk to add the chunk to the database
- [ ] __5:__ Successful adding of the chunk returns 200 status
- [ ] __5:__ Unsuccessful adding of the chunk returns 400 status

## Part 3: Front-End

### HTML and CSS
Add a light blue banner across the top of the `flavors.pug` OR `flavors.ejs` page with a title "Ice Cream Flavors"

- [ ] __10:__ The banner spans the entire page width
- [ ] __10:__ The title is centered within the banner
- [ ] __5:__ The background of the banner is light blue

### AJAX
When the user clicks the "Get Current Bestseller" button, make an AJAX call to the provided `/current_bestseller` and display the results in the span with the id `bestseller`.

- [ ] __10:__ AJAX call is initiated when user clicks button
- [ ] __10:__ AJAX call gets data from route
- [ ] __10:__ Front end JavaScript displays the result in the `bestseller` span
