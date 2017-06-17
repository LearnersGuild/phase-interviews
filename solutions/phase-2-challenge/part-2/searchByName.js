const clientData = require('./clients.json')

function searchByName(name) {
  const searchName = name.toLowerCase()
  const matchLength = searchName.length

  return clientData.filter((client) => {
    const repNameMatch = client.rep_name.slice(0, matchLength).toLowerCase()
    return repNameMatch === searchName
  }).map((result) => {
    return {
      id: result.id,
      rep_name: result.rep_name
    }
  })
}

const name = process.argv[2]

console.log('Finding clients with name "Ad"...', '\n')
console.log(searchByName(name))
