const WEEKDAYS = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function weekday(date) {
  const weekdayNumber = date.getDay()

  return WEEKDAYS[weekdayNumber]
}

function snippet(string, maxlength) {
  if (maxlength === undefined)
    throw 'missing argument maxlength'

  if (string.length <= maxlength)
    return string

  return string.slice(0, maxlength) + '…'
}

function numProps(obj) {
  if (typeof obj !== 'object')
    throw 'argument must be an object'

  return Object.getOwnPropertyNames(obj).length
}

function filterBetween(array, min, max) {

}

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
