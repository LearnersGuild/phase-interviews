const express = require('express')
const app = express()

app.get('/zero', (req, res) => {
  res.send('0')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
