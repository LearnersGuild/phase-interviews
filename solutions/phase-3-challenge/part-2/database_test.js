const chai = require('chai')
const expect = chai.expect

const {
  itemsInSection,
  cheapItems,
  countItemsInSection
} = require('./database.js')


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
    // `cheapItems()` returns the item `"Fish"` as the first item and `"Honey"` as the last item
    done()
  })
})

describe('countItemsInSection()', () => {
  it('gets the count of all items in the given section', (done) => {
    // `countItemsInSection("packaged")` returns `5`
    done()
  })
})
