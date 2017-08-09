const clientData = require('./clients.json')

function searchByState(state) {
  const searchState = state.toLowerCase()

  return clientData.filter((client) => {
    const state = client.state.toLowerCase()
    return state === searchState
  }).map((result) => {
    return {
      id: result.id,
      rep_name: result.rep_name,
      company: result.company,
      city: result.city,
      state: result.state
    }
  })
}

const state = process.argv[2]

console.log(`Finding clients in state "${state}"...`, '\n')
console.log(searchByState(state))
