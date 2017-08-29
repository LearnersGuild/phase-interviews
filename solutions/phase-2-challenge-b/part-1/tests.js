import { expect } from 'chai'
import {
  month,
  reverseSentence,
  nameProps,
  filterBetween,
} from './functions'

describe('month()', function () {
  it('returns the name of the month', function () {
    expect( month(new Date('Aug 25, 2017')) ).to.eq('August')
    expect( month(new Date('Sept 1, 1991')) ).to.eq('September')
  })

  it('throws a TypeError on invalid input', function () {
    expect(() => { month('Aug 25, 2017') }).to.throw(TypeError)
    expect(() => { month('chicken')      }).to.throw(TypeError)
    expect(() => { month([])             }).to.throw(TypeError)
  })
})

describe('reverseSentence()', function () {
  it('returns the sentence reversed', function () {
    const examples = [
      ['The cat jumped over the dog.', 'dog. the over jumped cat The'],
      ['Hello World!', 'World! Hello'],
      ['oneWord', 'oneWord'],
      ['', ''],
    ]
    examples.forEach(([sentence, reversed]) => {
      expect(reverseSentence(sentence)).to.eq(reversed)
    })
  })

  it('throws a TypeError on invalid input', function () {
    expect(() => { reverseSentence(['Hello', 'World']) }).to.throw(TypeError)
  })
})

describe('nameProps()', function () {
  it('returns the sorted names of the objects properties', function () {
    expect(nameProps({a: 1, b: 2})).to.deep.eq(['a', 'b'])
    expect(nameProps({z: 1, a: 2})).to.deep.eq(['a', 'z'])
    expect(nameProps({blue: 1, green: 2})).to.deep.eq(['blue', 'green'])
    expect(nameProps({})).to.deep.eq([])
  })

  it('throws a TypeError on invalid input', function () {
    expect(() => { nameProps([])         }).to.throw(TypeError)
    expect(() => { nameProps('a string') }).to.throw(TypeError)
  })
})

describe('filterBetween()', function () {
  let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

  it('returns the strings within the range given', function () {
    expect(filterBetween(arr, 'deer', 'giraffe')).to.deep.eq(['dog'])
    expect(filterBetween(arr, 'chimp', 'lobster')).to.deep.eq(['dog', 'lion', 'cow'])
    expect(filterBetween(arr, 'chickadee', 'chimpanzee')).to.deep.eq([])
  })

  it('throws a TypeError on invalid input', function () {
    expect(() => { filterBetween({a: 1}, 'min', 'max')            }).to.throw(TypeError)
    expect(() => { filterBetween('string of words', 'min', 'max') }).to.throw(TypeError)
    expect(() => { filterBetween(arr, 1, 10)                      }).to.throw(TypeError)

  })
})
