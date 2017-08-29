const clients = require('./clients')

const query = process.argv[2]
console.log(`Finding clients in City "${query}"...`)

const results = clients
  .filter(({city}) => city.toUpperCase() === query.toUpperCase())
  .map(c => ({
    id:       c.id      ,
    rep_name: c.rep_name,
    company:  c.company ,
    city:     c.city    ,
  }))

console.log(JSON.stringify(results, null, 2))
