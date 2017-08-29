const cars = require('./cars')
const model = process.argv[2]

const result = cars
  .filter(car => car.model.toLowerCase() === model.toLowerCase())
  .map(({id, model, year, last_owner, date_purchased}) => ({
    id,
    model,
    year,
    last_owner,
    date_purchased,
  }))

console.log(JSON.stringify(result, null, 4))
