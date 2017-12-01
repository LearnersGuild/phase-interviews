# Foundations -> Practice Version 2 challenge

**Note**: Be sure to **read and follow the installation instructions** in the
`README.md` for the each _part-x_ folder before completing that part.

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `getFlightCounts` that uses `pg-promise`.
The function takes a `minFlightCount` parameter, and returns the name and number
of flights ("flight count") for all passengers who have at least that many
flights in the database.

* [ ] **5:** The function takes `minFlightCount` as a parameter
* [ ] **10:** The function's query returns the name and flight count for
      passengers in the database.
* [ ] **10:** The function's query returns only the passengers who have a flight
      count greater than or equal to the `minFlightCount` parameter.
* [ ] **10:** The function returns a promise which resolves to the results of
      the query

## Part 2: Express

### GET route

Create a GET route for `/flight_counts` that receives GET data with the key
`minFlightCount` (value is the minimum number of flights a passenger must have
in order to be displayed on the page). Use the `getFlightCounts` function
provided in `db.js`.

* [ ] **5:** Route uses GET
* [ ] **10:** Route accesses GET data
* [ ] **10:** Route uses the provided `getFlightCounts` function to retrieve the
      passenger data
* [ ] **15:** Route uses `flight_counts.ejs` or `flight_counts.pug` to display
      names and flight counts of passengers returned from `getFlightCounts`
* [ ] **10:** If there's an error, the page displays `An error occurred` in the
      div with the id `message`.
* [ ] **10:** Learner demonstrates GET route (non-error) functionality using a
      browser

## Part 3: Front-End

### DOM Manipulation

In this section, the scaffolding has been set up for the `/flight_counts` route
as described in Part 2. Choose a template engine (EJS or Pug) in app.js and then
access the `flight_counts` route with a query string of `minFlightCount=4` to
see it in action.

The challenge for this section: when a user clicks the `Get total flights`
button, display the total flight count (the sum of the numbers in the "flight
count" column of the table) in the span with the id `flight-count-total`.

You may use vanilla JS or JQuery.

* [ ] **10:** The `Get total flights` button has a click event listener.
* [ ] **10:** Clicking the button displays a number in the `flight-count-total`
      div.
* [ ] **10:** Clicking the button calculates the sum of all the counts in the
      "flight count" column of the table
* [ ] **10** Clicking the button displays the sum in the `flight-count-total`
      div.
* [ ] **10:** JavaScript is contained in `public/recipes.js` (not in the HTML
      file)
