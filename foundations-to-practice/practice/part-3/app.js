const express = require('express')
const bodyParser = require('body-parser');
const { getAllTeamNames } = require('./db/db')

const app = express()
app.use(express.static('public'))
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  getAllTeamNames()
    .then((teams) => {
      // res.render('teams.pug', { teams })
      // res.render('teams.ejs', { teams })
    })
})

app.get('/current_favorite_team', (req, res) => {
  getAllTeamNames()
    .then((teams) => {
      // get "favorite team" randomly
      const favoriteTeam = teams[Math.floor(Math.random() * teams.length)]
      res.send(favoriteTeam)
    })
})

app.listen(3000, () =>
  console.log('Playing ball on port 3000!')
)
