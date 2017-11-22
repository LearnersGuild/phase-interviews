const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/team_colors')

/**
 * Get the names of all teams in the database.
 * @return {Promise} Promise resolving to an array of strings
 */
const getAllTeamNames = () =>
  db.any('SELECT name FROM teams')
    .then(names => names.map(name => name.name))

/**
 * Add a team to the database with the provided data
 * @param {string} teamName Name of the team
 * @param {string} city Name of the city where team is located
 * @return {Promise} Promise which will be fulfilled if the insert succeeds; rejected if not
*/
const addTeam = (teamName, city) =>
  db.one('SELECT id FROM cities WHERE name=$1', city)
    .then(result => db.oneOrNone(`
        INSERT INTO teams (name, city_id)
        VALUES ($1, $2)`,
      [teamName, result.id]))

module.exports = {
  getAllTeamNames,
  addTeam,
}
