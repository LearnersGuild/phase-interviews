const express = require('express')
const app = express()

app.get('/zero', (req, res) => {
  res.send('0')
})

app.get('/add', (req, res) => {
  const {a, b} = req.query
  const result = Number(a) + Number(b)
  res.send(String(result))
})

app.get('/subtract', (req, res) => {
  const {a, b} = req.query
  const result = Number(a) - Number(b)
  res.send(String(result))
})

app.get('/double/:number', (req, res) => {
  const num = req.params.number
  const result = Number(num) * 2
  res.send(String(result))
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
