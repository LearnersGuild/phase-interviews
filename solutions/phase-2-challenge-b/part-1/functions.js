export function month (date) {
  assertType(date, 'Date')

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return months[date.getMonth()]
}

export function reverseSentence (sentence) {
  assertType(sentence, 'String')

  return sentence.split(' ').reverse().join(' ')
}

export function nameProps (object) {
  assertType(object, 'Object')

  return Object.keys(object).sort()
}

export function filterBetween (array, min, max) {
  assertType(array, 'Array')
  assertType(min  , 'String')
  assertType(max  , 'String')

  return array.filter(x => min <= x && x <= max)
}

function assertType (obj, type) {
  if (Object.prototype.toString.apply(obj) !== `[object ${type}]`) {
    throw new TypeError()
  }
}
