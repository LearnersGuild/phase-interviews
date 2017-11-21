const express = require('express')
const bodyParser = require('body-parser');
const { getAllFlavors, addChunk } = require('./db/db')

const app = express()
app.use(express.static('public'))
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  getAllFlavors()
    .then((flavors) => {
      // res.render('flavors.pug', { flavors })
      res.render('flavors.ejs', { flavors })
    })
})

app.get('/current_bestseller', (req, res) => {
  getAllFlavors()
    .then((flavors) => {
      // get "bestseller" randomly
      const bestseller = flavors[Math.floor(Math.random() * flavors.length)]
      res.send(bestseller)
    })
})

app.listen(3000, () =>
  console.log('Scooping out ice cream on port 3000!')
)
