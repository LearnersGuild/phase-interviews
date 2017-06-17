const chai = require('chai')
const {
  weekday,
  snippet,
  numProps,
  filterBetween
} = require('./functions.js')

const expect = chai.expect

describe('weekday()', () => {
  it('returns the three-letter day of week for date object', () => {
    let date = new Date(2017, 6, 19) // June 19, 2017
    expect(weekday(date)).to.equal("Mon")
  })
})
