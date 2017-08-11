const pgp = require('pg-promise')()

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'grocery_store',
})

function allItems() {
  return db.query('SELECT * FROM items;')
}

function itemsInSection(section) {
  return db.query('SELECT id, name FROM items WHERE section = $1', section)
}

function cheapItems() {
  const queryString = `
    SELECT id, price
    FROM items
    WHERE price < 10.00
    ORDER BY price ASC;
  `

  return db.query(queryString)
}

function countItemsInSection(section) {
  return db.one('SELECT count(*) FROM items WHERE section = $1', section)
}

function mostRecentOrders() {
  const queryString = `
    SELECT id, date_placed
    FROM orders
    ORDER BY date_placed DESC
    LIMIT 10;
  `

  return db.query(queryString)
}

function lastShopperName() {
  const queryString = `
    SELECT name
    FROM shoppers
    INNER JOIN orders
    ON orders.shopper_id = shoppers.id
    ORDER BY orders.date_placed DESC
    LIMIT 1;
  `

  return db.oneOrNone(queryString)
}

function orderTotal(orderID) {
  const queryString = `
    SELECT sum(items.price)
    FROM items
    INNER JOIN order_items
    ON order_items.item_id = items.id
    INNER JOIN orders
    ON order_items.order_id = orders.id
    WHERE orders.id = $1;
  `

  return db.oneOrNone(queryString, orderID)
}

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
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
  cheapItems().then(showResults('cheapItems()'))
  countItemsInSection('bulk').then(showResults("countItemsInSection('bulk')"))
  mostRecentOrders().then(showResults('mostRecentOrders()'))
  lastShopperName().then(showResults('lastShopperName()'))
  orderTotal(2).then(showResults('orderTotal(2)'))

  pgp.end()
}
