const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/icecream_flavors')

/**
 * Get the names of all flavors of ice cream in the database.
 * @return {Promise} Promise resolving to an array of strings
 */
const getAllFlavors = () =>
  db.any('SELECT name FROM flavors')
    .then(names => names.map(name => name.name))

/**
 * Add a chunk to the database with the provided data
 * @param {string} chunkName Name of the chunk
 * @param {string} chunkType Name of the chunk's type
 * @return {Promise} Promise which will be fulfilled if the insert succeeds; rejected if not
*/
const addChunk = (chunkName, chunkType) =>
  db.one('SELECT id FROM chunk_types WHERE name=$1', chunkType)
    .then(result => db.oneOrNone(`
        INSERT INTO chunks (name, type_id)
        VALUES ($1, $2)`,
      [chunkName, result.id]))

module.exports = {
  getAllFlavors,
  addChunk,
}
