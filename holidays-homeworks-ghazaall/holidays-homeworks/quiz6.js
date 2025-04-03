/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/

// answer1:

function sumOfDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += Number(str[i]);
    }
  }

  return sum;
}
console.log(sumOfDigits("ghazaal13  77"));

// ______________________________________________________________
// answer2:
// function sumOfDigits(str) {
//   return str
//     .split("")
//     .filter((char) => char.match(/[0-9]/g))
//     .map(Number)
//     .reduce((total, num) => total + num, 0);
// }
// console.log(sumOfDigits("ghazaal1377"));
