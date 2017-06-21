const express = require('express')
const router = express.Router()
const database = require('../db/')

const requireUser = require('../middleware/requireUser')

router.get('/:albumID', (request, response) => {
  const { albumID } = request.params

  database.getAlbumsByID(albumID, (error, albums) => {
    if (error) {
      response.status(500).render('errors/error', { error: error })
    } else {
      const album = albums[0]

      database.getReviewsByAlbumId( albumID, (error, reviews) => {
        album.reviews = reviews
        response.render('albums/album', { album })
      })
    }
  })
})

router.get('/:albumID/add-review', requireUser, (request, response) => {
  const { albumID } = request.params

  database.getAlbumsByID( albumID, (error, albums) => {
    if( error ) {

    } else {
      const album = albums[0]
      response.render('reviews/add-review', { album })
    }
  })
})

router.post('/:albumID/add-review', requireUser, (request, response) => {
  const userID = request.user.id
  const { albumID } = request.params
  const { content } = request.body

  database.addReviewByAlbumId( userID, albumID, content, (error, _) => {
    if( error ) {
      response.status(500).render('errors/error', { error: error })
    } else {
      response.redirect(`/albums/${albumID}`)
    }
  })
})

module.exports = router