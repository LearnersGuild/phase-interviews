const express = require('express')
const bodyParser = require('body-parser');
const { getTeamColors } = require('./db/db')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.get('/:teamname/colors', (req, res) => {
  getTeamColors(req.params.teamname)
    .then((colors) => {
      console.log('colors::', colors)
      res.render('flights', { colors })
    })
})

app.listen(3000, () =>
  console.log('Flying high on port 3000!')
)
