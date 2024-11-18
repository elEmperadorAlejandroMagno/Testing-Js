// Reduce method js exercise chapter 5
// FLattening

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
const flattenedArray = arrays.reduce((accumulator, currentArray) => {
  console.log("accumulator");
  console.log(accumulator);
  console.log("Current Array");
  console.log(currentArray);
  return accumulator.concat(currentArray)
},[]);

console.log(flattenedArray);

// Every and then some
const numbers = [1, 2, 3, 4, 5];

const allPositive = every(numbers, n => n > 0); // true
const someNegative = some(numbers, n => n < 0); // false

console.log(`All numbers are positive: ${allPositive}`); // All numbers are positive: true
console.log(`Some numbers are negative: ${someNegative}`); // Some numbers are negative: false

