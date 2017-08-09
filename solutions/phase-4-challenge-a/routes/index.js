const express = require('express')
const router = express.Router()
const database = require('../db/')

router.get('/', (request, response) => {
  database.getAlbums((error, albums) => {
    if (error) {
      response.status(500).render('errors/error', { error: error })
    } else {
      database.getRecentReviews((error, reviews) => {
        if (error) {
          response.status(500).render('errors/error', { error: error })
        } else {
          response.render('index', { albums, reviews })
        }
      })
    }
  })
})

module.exports = router