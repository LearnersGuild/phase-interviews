const express = require('express')
const bodyParser = require('body-parser');
const { getAllTeamNames } = require('./db/db')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  getAllTeamNames()
    .then((teams) => {
      res.render('teams.pug', { teams })
      // res.render('teams.ejs', { teams })
    })
})

app.listen(3000, () =>
  console.log('Playing ball on port 3000!')
)
