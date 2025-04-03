/*
13. Write a function to check whether a given number is in a given range.
Example ===> 
(1,2,4) => 2 is between 1 and 4 ===> return ==> true
(1,2,-3) = 2 is not between 1 and -3 ===> return ==> false
*/

// !منظور سوال واضح نبود

function isInRange(range, num) {
  const sortRange = range.sort((a, b) => a - b);

  return sortRange[0] < num && num < sortRange[sortRange.length - 1];
}

console.log(isInRange([1, 2, -5, 8], -6));
console.log(isInRange([10, 1], 5));
