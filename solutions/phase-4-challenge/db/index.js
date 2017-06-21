const pg = require('pg')

const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const client = new pg.Client(connectionString)

client.connect()

// Query helper function
const query = function(sql, variables, callback){
  console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)

  client.query(sql, variables, function(error, result){
    if (error){
      console.log('QUERY <- !!ERROR!!')
      console.error(error)
      callback(error)
    }else{
      console.log('QUERY <-', JSON.stringify(result.rows))
      callback(error, result.rows)
    }
  })
}

const getAlbums = function(callback) {
  query("SELECT * FROM albums", [], callback)
}

const getAlbumsByID = function(albumID, callback) {
  query("SELECT * FROM albums WHERE id = $1", [albumID], callback)
}

const returnOne = callback => (error, result) => {
  if(error) {
    callback(error)
  } else {
    callback(error, result[0])
  }
}

const createUser = (name, email, password, callback) => {
  // TODO, probably wanna encrypt
  query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, joined_at", [name, email, password], returnOne(callback))
}

const findUser = (email, password, callback) => {
  // TODO, probably wanna encrypt, return more specific errors
  query("SELECT id, name, email, joined_at FROM users WHERE email=$1 AND password=$2", [email, password], returnOne(callback))
}

const findUserById = (id, callback) => {
  query("SELECT id, name, email, joined_at FROM users WHERE id=$1", [id], returnOne(callback))
}

const getReviewsByAlbumId = (albumID, callback) => {
  query("SELECT reviews.id, albums.id AS album_id, albums.title AS album_title, reviews.created_at, reviews.content, reviews.user_id AS reviewer_id, users.name AS reviewer_name FROM reviews JOIN users ON users.id=reviews.user_id JOIN albums ON albums.id=reviews.album_id WHERE albums.id=$1 ORDER BY reviews.created_at DESC", [albumID], callback)
}

const getReviewsByUserId = (userId, callback) => {
  query("SELECT reviews.id, albums.id AS album_id, albums.title AS album_title, reviews.created_at, reviews.content, reviews.user_id AS reviewer_id, users.name AS reviewer_name FROM reviews JOIN users ON users.id=reviews.user_id JOIN albums ON albums.id=reviews.album_id WHERE reviews.user_id=$1 ORDER BY reviews.created_at DESC", [userId], callback)
}

const addReviewByAlbumId = (userID, albumID, reviewText, callback) => {
  query("INSERT INTO reviews (user_id, album_id, content) VALUES ($1, $2, $3)", [userID, albumID, reviewText], callback)
}

const getRecentReviews = callback => {
  query("SELECT reviews.id, albums.id AS album_id, albums.title AS album_title, reviews.created_at, reviews.content, reviews.user_id AS reviewer_id, users.name AS reviewer_name FROM reviews JOIN users ON users.id=reviews.user_id JOIN albums ON albums.id=reviews.album_id ORDER BY reviews.created_at DESC LIMIT 3", [], callback )
}

const deleteReview = (reviewId, callback) => {
  query("DELETE FROM reviews WHERE id=$1", [reviewId], callback)
}

module.exports = {
  getAlbums,
  getAlbumsByID,
  createUser,
  findUser,
  findUserById,
  getReviewsByAlbumId,
  getReviewsByUserId,
  addReviewByAlbumId,
  getRecentReviews,
  deleteReview
}
