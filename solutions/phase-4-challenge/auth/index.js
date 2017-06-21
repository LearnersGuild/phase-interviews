const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const database = require('../db/')

const CONFIGURATION = { usernameField: 'email' }

const strategy = new LocalStrategy( CONFIGURATION, (email, password, done) => {
  database.findUser(email, password, (error, user) => {
    if( error ) { 
      return done(error)
    } else if( user === undefined ) {
      return done( null, false, { message: 'Invalid credentials.' })
    }

    return done(null, user)
  })
})

passport.use( strategy )

passport.serializeUser( (user, callback) => {
  callback(null, user.id)
})

passport.deserializeUser( (id, callback) => {
  database.findUserById(id, (error, user) => {
    if( error ) {
      return callback(error)
    } 

    callback(null, user)
  })
})

module.exports = passport