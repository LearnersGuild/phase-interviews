const express = require('express')
const router = express.Router()
const passport = require('../auth/')
const database = require('../db')

router.get('/sign-in', (request, response) => {
  response.render('users/sign-in')
})

router.post('/sign-in', passport.authenticate('local'), (request, response) => {
  const { id } = request.user

  response.redirect(`/users/${id}`)
}) 

router.get('/sign-out', (request, response) => {
  request.logout()
  response.redirect('/')
})

router.get('/sign-up', (request, response) => {
  response.render('users/sign-up')
})

router.post('/sign-up', (request, response, next) => {
  const { name, email, password } = request.body

  database.createUser(name, email, password, (error, user) => {
    if( error ) {
      next(error)
    } else {
      response.redirect(`/users/${user.id}`) 
    }
  }) 
})

router.get('/:id', (request, response) => {
  const { id } = request.params

  database.findUserById(id, (error, user) => {
    if( error ) {
      response.render('users/profile', { user: { id, name: 'Unknown User', email: '', joined_at: '' }})
    } else {
      database.getReviewsByUserId(id, (error, reviews) => {
        if( error ) {
          response.render('users/profile', { user, reviews: [] })
        } else {
          response.render('users/profile', { user, reviews })
        }
      })
    }
  })
})

module.exports = router