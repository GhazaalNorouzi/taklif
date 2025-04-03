// ? Question-1:write a function that accepts numbers array as parameter
// ?and split negative numbers and positive numbers in two seperated array.

const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:
const positiveNumbers = [];
const negativeNumbers = [];

function splitNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveNumbers.push(arr[i]);
    } else {
      negativeNumbers.push(arr[i]);
    }
  }
}
splitNumbers(numbers); /** please dont forget call to call the function */

positiveNumbers.sort((a, b) => a - b);
positiveNumbers.sort((a, b) => a - b);

console.log(positiveNumbers);
console.log(negativeNumbers);

// *notic:if use return inside a loop, it will exit the loop
