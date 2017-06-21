const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const database = require('./db/')

const app = express()
const auth = require('./auth/')
const setLocals = require('./middleware/setLocals')

const index = require('./routes/index')
const users = require('./routes/users')
const albums = require('./routes/albums')
const reviews = require('./routes/reviews')

require('pug')
app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({ secret: 'slartibartfast', resave: false, saveUninitialized: false }))
app.use(auth.initialize())
app.use(auth.session())

app.use(setLocals)

app.use('/', index )
app.use('/users', users)
app.use('/albums', albums)
app.use('/reviews', reviews)

app.use((request, response) => {
  response.status(404).render('errors/not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
