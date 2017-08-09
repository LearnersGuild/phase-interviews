const cars = require('./cars.json')

const model = process.argv[2]

console.log(`Finding cars with model "${model}"...`)

const result = cars.filter((car) => car.model.toLowerCase() === model.toLowerCase())
                   .map((car) => {
                     const {id, model, year, last_owner, date_purchased} = car
                     return {id, model, year, last_owner, date_purchased}
                   })

console.log(result)
