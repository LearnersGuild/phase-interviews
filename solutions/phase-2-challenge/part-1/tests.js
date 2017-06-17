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
    let mon = new Date(2017, 5, 19) // June 19, 2017
    let thu = new Date(2017, 5, 15) // June 15, 2017

    expect(weekday(mon)).to.equal("Mon")
    expect(weekday(thu)).to.equal("Thu")
  })

  it('requires a date object as input', () => {
    expect(() => {
      weekday("monday")
    }).to.throw(TypeError)
  })
})
