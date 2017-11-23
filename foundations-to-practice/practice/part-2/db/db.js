const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/team_colors')
db.connect()

/**
 * Get the all colors for the specified team.
 * @param {string} teamName - name of the team for which to get colors
 * @return {Promise} Promise resolving to an array of strings
 */
const getTeamColors = teamName =>
  db.query(`
      SELECT c.name
      FROM colors AS c
        JOIN team_colors AS tc
          ON c.id = tc.color_id
        JOIN teams AS t
          ON t.id = tc.team_id
      WHERE t.name ILIKE $1
    `, [teamName])
    .then(colors => colors.map(color => color.name))

/**
 * Add a color to the database for the specified team
 * @param {string} teamName Name of the team for which the color needs to be added
 * @param {string} colorName Name of the color
 * @return {Promise} Promise which will be fulfilled with the color data
 *                           if the insert succeeds; rejected if not
*/
const addTeamColor = (teamName, colorName) =>
  db.one('SELECT id FROM teams WHERE name=$1', teamName)
    .then(result => db.oneOrNone(`
        INSERT INTO colors (name, team_id)
        VALUES ($1, $2)
        RETURNING *`,
      [colorName, result.id]))

module.exports = {
  getTeamColors,
  addTeamColor,
}
