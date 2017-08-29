const cars = require('./cars')
const [min, max] = process.argv[2]
  .split('-')
  .map(n => parseInt(n))

const result = cars
  .filter(({year}) => year >= min && year <= max)
  .map(({id, make, model, year}) => ({
    id,
    make,
    model,
    year,
  }))

console.log(JSON.stringify(result, null, 4))
