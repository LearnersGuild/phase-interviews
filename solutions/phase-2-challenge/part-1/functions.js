const WEEKDAYS = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function weekday(date) {
  const weekdayNumber = date.getDay()

  return WEEKDAYS[weekdayNumber]
}

function snippet(string, maxlength) {

}

function numProps(obj) {

}

function filterBetween(array, min, max) {

}

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
