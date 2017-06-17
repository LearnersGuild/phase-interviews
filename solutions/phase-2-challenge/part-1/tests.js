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

describe('snippet()', () => {
  it('shortens a string to `maxlength` and adds an ellipsis', () => {
    const str = "For the following exercises,"
    expect(snippet(str, 10)).to.equal("For the fo…")
  })

  it('returns unmodified string if shorter than `maxlength`', () => {
    const str = "Hello, world!"
    expect(snippet(str, 20)).to.equal(str)
  })

  it('requires the `maxlength` argument', () => {
    expect(() => {
      snippet('Foo')
    }).to.throw('missing argument maxlength')
  })
})

describe('numProps()', () => {
  it('returns the number of properties an object has', () => {
    const friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }

    expect(numProps(friend)).to.equal(3)
    expect(numProps({})).to.equal(0)
  })

  it('requires that the argument is an object', () => {
    expect(() => {
      numProps(2)
    }).to.throw('argument must be an object')
  })
})
