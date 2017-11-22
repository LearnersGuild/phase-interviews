# Foundations -> Practice practice challenge

## Notes on this Practice challenge (please read carefully)

- This is intended to give you an idea of the type of tasks you will be asked to do for the live coding interview.

- You may choose either pug or ejs as a template engine.

- The live coding interview will have __all the same sections__ as this practice exam, but the __exact tasks will vary__. For example, you may be asked to:
  - write a different kind of SQL query
  - utilize GET data in the *Express GET Route* section
  - add an element to the DOM

- Refer to the (TODO: some link here) list of topics covered to understand the possible range of topics.

- The "subject" of the interview will also be different (for example, hotel reservations instead of sports teams).

## Part 1: SQL

### Node and PostgreSQL

Create a function in `db.js` called `getTeamColors` that uses `pg-promise`. The function should get the names of all colors for a given team.

  - [ ] __5:__ Function takes the name of a team
  - [ ] __15:__ Function executes a query that returns the given team's associated colors
  - [ ] __10:__ Function returns a promise resolving to the result of the query

## Part 2: Express

### GET route
Create a GET route for `/teams` that renders team names. Use the `getAllTeamNames` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route uses getAllTeamNames to get the necessary data
- [ ] __10:__ Route renders `teams.pug` OR `teams.ejs` template with the teams from the db

### POST route
Create a POST route for `/team/add` that adds a new team to the database. Use the `addTeam` function provided in `db.js`.

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses addTeam to add the team to the database
- [ ] __5:__ Successful adding of the team returns 200 status
- [ ] __5:__ Unsuccessful adding of the team returns 400 status

## Part 3: Front-End

### HTML and CSS
Add a light blue banner across the top of the `teams.pug` OR `teams.ejs` page with a title "Bay Area Sports Teams"

- [ ] __10:__ The banner spans the entire page width
- [ ] __10:__ The title is centered within the banner
- [ ] __5:__ The background of the banner is light blue

### DOM Manipulation
When the user clicks the "Add Team" button, add the team name from the text box to the list of teams on the page.

- [ ] __10:__ Add event listener to "Add Team" button
- [ ] __15:__ Add team name as another entry in the team list on the page.
