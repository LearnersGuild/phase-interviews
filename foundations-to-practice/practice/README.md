# Foundations -> Practice practice challenge

## Notes on the Practice challenge (please read carefully)

- This is intended to give you an idea of the type of tasks you will be asked to do for the live coding interview.

- The live coding interview will look different from this. The tasks will be similar; however there will be some variations. For example, you may be asked to implement a different HTML feature or change a different CSS property. Or you may be asked to utilize GET data instead of POST data in the Express section.

- Refer to the (TODO: some link here) list of topics covered to get an idea of the possible range of topics.

## Part I: SQL Queries

### Instructions
1. Write a query to obtain the following data:

  - [ ] __20:__ Names of all flavors that contain chocolate chips.

2. Create a function in *db.js* using `pg-promise`.

  - [ ] __10:__ Function takes the name of a chunk
  - [ ] __10:__ Function executes the query successfully
  - [ ] __10:__ Function returns a promise resolving to an array with the names of flavors containing the chunk

## Part II: Express

### Instructions

1. Create a GET route for */flavors* that renders ice cream flavor names. Use the `getIcecreamFlavors` function in *db.js*.

- [ ] __5:__ Route uses GET
- [ ] __5:__ Response contains appropriate headers
- [ ] __10:__ Route uses getIcecreamFlavors to get the necessary data
- [ ] __10:__ Route renders `flavors.pug` template with the ice cream flavors from the db

2. Create a POST route for */chunk/add* that adds a new chunk to the database. Use the `addChunk` function in *db.js*.

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses addChunk to add the chunk to
- [ ] __5:__ Successful adding of the chunk returns 200 status
- [ ] __5:__ Unsuccessful adding of the chunk returns 400 status

## Part III: Front-End

### Instructions

1. Add a light blue banner across the top of the `flavors.pug` page with a title "Ice Cream Flavors"

- [ ] __10:__ The banner spans the entire page width
- [ ] __10:__ The title is centered within the banner
- [ ] __5:__ The background of the banner is light blue

2. When the user clicks the "Get Current Bestseller" button, make an AJAX call to */current_bestseller* and display the results in the span with the id *bestseller*.

- [ ] __10:__ AJAX call is initiated when user clicks button
- [ ] __10:__ AJAX call gets data from route
- [ ] __10:__ Front end JavaScript displays the result in the *bestseller* span.
