const pgp = require('pg-promise')()

const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'grocery_store',
}

const db = pgp(dbConfig)

function allItems() {
  return db.query('SELECT * FROM items;')
}

function itemsInSection(section) {
  return db.query('SELECT * FROM items WHERE section = $1', section)
}

function cheapItems() {

}

function countItemsInSection(section) {

}

function mostRecentOrders() {

}

function lastShopperName() {

}

function orderTotal(ID) {

}

if (!module.parent) {
  const showResults = (funcCall) => {
    return (results) => {
      console.log("\n========\n")
      console.log(`> ${funcCall} => `)
      console.log("\n")
      console.log(results)
      console.log("\n")
    }
  }

  allItems().then(showResults('allItems()'))
  itemsInSection('bulk').then(showResults("itemsInSection('bulk')"))

  pgp.end()
}
