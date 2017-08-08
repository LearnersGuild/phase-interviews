// Can use Array#forEach in JavaScript
// Can use Array#map in JavaScript
// Can use Array#filter in JavaScript
// Can use Array#reduce in JavaScript

const nums = [1, 2, 3, 4]

const multipliedBy3 = nums.___((num) => {
  return num * 3
})
// multipliedBy3 => [3, 6, 9, 12]

const evenNumbers = nums.___((num) => {
  return num % 2 === 0
})
// evenNumbers => [2, 4]

const sum = nums.___((accumulator, num) => {
  return accumulator + num
})
// sum => 10

nums.___((num, index) => {
  console.log(`The number at index ${index} is ${num}`)
})
// prints out the following =>
//  The number at index 0 is 1
//  The number at index 1 is 2
//  The number at index 2 is 3
//  The number at index 3 is 4
