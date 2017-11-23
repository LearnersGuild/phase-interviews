# Foundations -> Practice practice challenge

## Notes on this Practice challenge (please read carefully)

- This is intended to give you an idea of the type of tasks you will be asked to do for the live coding interview.

- During the challenge you may:

  - google search for reference material from the web.
  - use the command line and/or the browser console to debug your work.
  - use Postico or psql to examine the database.

- You may choose either pug or ejs as a template engine.

- The live coding interview will have __all the same sections__ as this practice exam, but the __exact tasks will vary__. For example, you may be asked to:
  - write a different kind of SQL query
  - utilize GET data in the *Express GET Route* section
  - remove an element from the DOM

- Refer to the (TODO: some link here) list of topics covered to understand the possible range of topics.

- The "subject" of the interview will also be different (for example, hotel reservations instead of sports teams).

- The actual live coding interview will likely have a smaller amount of coding than this practice version.

## Part 1: SQL

__Note__: For this and the following sections, please be sure to __read and follow the installation instructions__ in the `README.md` for the corresponding *part-x* folder.

### Node and PostgreSQL

Create a function in `db.js` called `getTeamColors` that uses `pg-promise`. The function should get the names of all colors for a given team.

  - [ ] __5:__ Function accepts the name of a team as a parameter
  - [ ] __15:__ Function executes a query that returns the given team's associated colors
  - [ ] __10:__ Function returns a promise which resolves to the result of the query

## Part 2: Express

### GET route
Create a GET route for `/:teamname/colors` that renders colors for a particular team. Use the `getTeamColors` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route uses `getTeamColors` to get the necessary data
- [ ] __10:__ Route renders `team_colors.pug` OR `team_colors.ejs` template with the teams from the db

### POST route
Create a POST route for `/:teamname/colors/add` that receives JSON data and adds a new team to the database. Use the `addTeamColor` function provided in `db.js`. Example JSON POST data:

```{
  "name": "LG Engineers",
  "city": "Oakland"
}
```

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses addTeam to add the team to the database
- [ ] __5:__ Successful adding of the team returns 200 status and JSON with the key 'teamName' (and the appropriate value)
- [ ] __5:__ Unsuccessful adding of the team returns 400 status and JSON containing the key `message` with an error message as the value.
- [ ] __10:__ Learner demonstrates POST route functionality using Postman, curl, or the like as a client.

## Part 3: Front-End

### HTML and CSS
Add a yellow banner across the top of the `team_colors.pug` OR `team_colors.ejs` page with a title "<teamName> Colors" (where <teamName> is the name of the team whose colors are being displayed).

- [ ] __10:__ The banner spans the entire page width
- [ ] __10:__ The title is centered within the banner
- [ ] __5:__ The background of the banner is yellow

### DOM Manipulation
When the user clicks the "Add Color" button, add a new color (entered in the text box) to the list of colors on the page. __Note: There is no need to add the team to the database or communicate with the server in any way.__

- [ ] __10:__ Add event listener to "Add Color" button
- [ ] __10:__ Add another entry to the color list on the page after button click.
- [ ] __10:__ The new entry to the color list contains the new color name entered in the text input box.
