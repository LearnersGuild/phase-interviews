const cars = require('./cars.json')

const [first, last] = process.argv[2].split('-').map(y => Number(y))

console.log(`Finding cars from ${first} to ${last}...`)

const result = cars.filter((car) => car.year >= first && car.year <= last)
                   .map((car) => {
                     const {id, make, model, year} = car
                     return {id, make, model, year}
                   })

console.log(result)
