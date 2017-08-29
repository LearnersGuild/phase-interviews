const clients = require('./clients')

const query = process.argv[2]
console.log(`Finding companies with name "${query}"...`)

const results = clients
  .filter(({company}) => company.toUpperCase().startsWith(query.toUpperCase()))
  .map(c => ({
    id:      c.id     ,
    company: c.company,
    phone:   c.phone  ,
  }))

console.log(JSON.stringify(results, null, 2))
