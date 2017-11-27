const express = require('express')
const { getTeamColors } = require('./db/db')

const app = express()
app.use(express.static('public'))
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.get('/flight_counts', (req, res) => {
  const minFlightCount = req.query.minFlightCount
  getTeamColors(minFlightCount)
    .then((flightCounts) => {
      res.render('flights', { minFlightCount, flightCounts })
    })
    .catch((err) => {
      res.render('flights', { message: `An error occurred: ${err.toString()}` })
    })
})

app.listen(3000, () =>
  console.log('Flying high on port 3000!')
)
