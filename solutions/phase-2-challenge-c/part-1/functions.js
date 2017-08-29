export function weekday (date) {
  if (!(date instanceof Date)) {
    throw new Error('You must call weekday() with a date object')
  }
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return weekdays[date.getDay()]
}

export function capitalizeFourth(string) {
  if (Object.prototype.toString.call(string) !== "[object String]") {
    throw new Error('You must call capitalizeFourth() with a String')
  }
  return string
    .split('')
    .map((char, i) => {
      const isFourth = (i+1) % 4 === 0
      return isFourth ? char.toUpperCase() : char.toLowerCase()
    })
    .join('')
}

export function getValues(object) {
  if (!(object instanceof Object)) {
    throw new Error('You must call getValues() with an Object')
  }
  return Object.values(object)
}

export function filterAround(array, lower, upper) {
  if (!Array.isArray(array)) {
    throw new Error('You must call filterAround() with an Array')
  }
  return array.filter(x => x < lower || x > upper)
}
