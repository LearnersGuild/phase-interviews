const chai = require('chai')
const expect = chai.expect

const {
  itemsInSection,
  cheapItems,
  countItemsInSection
} = require('./database.js')

// Note: the following tests assume that the data being tested is
// the same as that in seed-data/items.csv

describe('itemsInSection()', () => {
  it('gets the ids and names of items in the given section', (done) => {
    itemsInSection('bulk').then((results) => {
      const names = results.map((item) => item.name)

      expect(results[0]).to.have.all.keys('id', 'name')
      expect(names.sort()).to.deep.equal(['Flour', 'Pasta', 'Rice'].sort())
      done()
    }).catch(console.error)
  })
})

describe('cheapItems()', () => {
  it('gets all items that cost less than $10.00, ordered from lowest to highest price', (done) => {
    cheapItems().then((results) => {
      const fishID = 15   // fish is the cheapest item ($0.49)
      const honeyID = 22  // honey is closest to $10.00 (but still cheaper at $9.31)

      const firstItem = results[0]
      const lastItem = results[results.length - 1]

      expect(firstItem.id).to.equal(fishID)
      expect(lastItem.id).to.equal(honeyID)
      done()
    }).catch(console.error)
  })
})

describe('countItemsInSection()', () => {
  it('gets the count of all items in the given section', (done) => {
    countItemsInSection('packaged').then((results) => {
      expect(Number(results.count)).to.equal(5)
      done()
    }).catch(console.error)
  })
})
