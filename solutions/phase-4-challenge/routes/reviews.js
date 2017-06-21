const express = require('express')
const router = express.Router()
const database = require('../db/')

router.get('/:id/delete', (request, response) => {
  const { id } = request.params

  database.deleteReview(id, (error, success) => {
    if( error ) {
      response.status(500).render('errors/error', { error })
    } else {
      response.redirect(request.get('Referer'))
    }
  })
})

module.exports = router