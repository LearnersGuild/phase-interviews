# Foundations -> Practice Version 2 challenge

__Note__: Be sure to __read and follow the installation instructions__ in the `README.md` for the each *part-x* folder before completing that part.

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `getFlightCounts` that uses `pg-promise`. The function takes a `minFlightCount` parameter, and returns the names of all passengers who are associated with at least that many flights in the database.

  - [ ] __10:__ The function's query returns the name and flight count for passengers in the database.
  - [ ] __10:__ The function's query returns only the passengers who have a flight count greater than or equal to the `minFlightCount` parameter.
  - [ ] __10:__ The function returns a promise which resolves to the results of the query

## Part 2: Express

### GET route
Create a GET route for `/flight_counts` that receives GET data with the key `minFlightCount`, whose value is the minimum number of flights a passenger must have in order to be displayed on the page. Use the `getFlightCounts` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route accesses GET data
- [ ] __10:__ Route uses `getFlightCounts` to retrieve the passenger data
- [ ] __15:__ Route uses `flight_counts.ejs` or `flight_counts.pug` to display names and flight counts of passengers returned from `getFlightCounts`
- [ ] __10:__ If there's an error, the page displays `An error occurred` in the div with the id `message`.
- [ ] __10:__ Learner demonstrates GET route (non-error) functionality using a browser

## Part 3: Front-End

### DOM Manipulation
In this section, the scaffolding has been set up for `flight_counts` as described in Part 2. Choose a template engine (EJS or Pug) in app.js and then access this page with a query string of `minFlightCount=4` to see what's up.

The challenge for this section: when a user clicks the `Get total flights` button, display the total flight count (the sum of the numbers in the "flight count" column of the table) in the span with the id `flight-count-total`.

- [ ] __10:__ The `Get total flights` button has a click event listener.
- [ ] __10:__ Clicking the button displays a number in the `flight-count-total` div.
- [ ] __15:__ Clicking the button displays the sum of the numbers in the "flight count" column in the `flight-count-total` div.
- [ ] __10:__ JavaScript is contained in `public/recipes.js` (not in the HTML file)
