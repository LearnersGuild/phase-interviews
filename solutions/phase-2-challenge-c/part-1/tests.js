import {expect} from 'chai'

import {
  weekday,
  capitalizeFourth,
  getValues,
  filterAround,
} from './functions'

describe('weekday', function () {
  it('returns the name of the day of the week (test 1)', function () {
    const date = new Date(2017, 5, 15) // Thursday June 15, 2017
    expect(weekday(date)).to.eq("Thursday")
  })

  it('returns the name of the day of the week (test 2)', function () {
    const date = new Date(2017, 11, 31) // Sunday Dec 31, 2017
    expect(weekday(date)).to.eq("Sunday")
  })

  it('throws an error if no date provided', function () {
    expect(() => {
      weekday('next thursday')
    }).to.throw('You must call weekday() with a date object')
  })
})

describe('capitalizeFourth()', function () {
  it('capitalizes every fourth character in a string', function () {
    expect(
      capitalizeFourth("ABRACADABRA")
    ).to.equal("abrAcadAbra")
  })

  it('treats whitespace the same as other chars', function () {
    expect(
      capitalizeFourth("Eenie, Meenie, Miney, Moe")
    ).to.equal("eenIe, MeenIe, MineY, mOe")
  })

  it('throws an error if no string provided', function () {
    expect(() => {
      capitalizeFourth(['a','b','c','d'])
    }).to.throw('You must call capitalizeFourth() with a String')
  })
})

describe('getValues()', function () {
  it('returns the values of an object', function () {
    expect(
      getValues({
          name: 'Dominique',
          age: 30,
          phone: '555-555-5555',
      })
    ).to.deep.equal(['Dominique', 30, '555-555-5555'])
  })

  it('Works with values that are arrays/objects', function () {
    expect(
      getValues({
        ids: [4, 8, 2],
        success: true,
      })
    ).to.deep.equal([[4, 8, 2], true])
  })

  it('returns empty array for empty object', function () {
    expect(getValues({})).to.deep.equal([])
  })

  it('throws an error if no object provided', function () {
    expect(() => {
      getValues(11)
    }).to.throw('You must call getValues() with an Object')
  })
})

describe('filterAround', function () {
  const animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

  it('filters out the strings between min and max (test 1)', function () {
    expect(
      filterAround(animals, 'cow', 'dog')
    ).to.deep.eq(['cat', 'zebra', 'ape', 'lion'])
  })

  it('filters out the strings between min and max (test 2)', function () {
    expect(
      filterAround(animals, 'chimp', 'lobster')
    ).to.deep.eq(['cat', 'zebra', 'ape'])
  })

  it('will return an empty array if nothing matches', function () {
    expect(
      filterAround(animals, 'aardvark', 'zebu')
    ).to.deep.eq([])
  })

  it('throws an error if no array provided', function () {
    expect(() => {
      filterAround(11)
    }).to.throw('You must call filterAround() with an Array')
  })
})
