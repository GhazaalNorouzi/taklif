/*
16. Write a function that takes two arguments, then puts the multiples of the first number up to the second number in an array.
Example ===> (2, 11) = [2, 4, 6, 8, 10]
Example ===> (3, 16) = [3, 6, 9, 12, 15]
*/

function multiple(m, n) {
  const array = [];
  for (let i = 1; m * i < n; i++) {
    array.push(m * i);
  }
  return array;
}
console.log(multiple(2, 11));
