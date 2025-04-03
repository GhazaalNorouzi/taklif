/*
  Array methods - sort
  --------------------
*/

let numbers = [3, 2, 1];
let numbers = [3, 2, 1];

let sortedNumbers = numbers.sort((a, b) => a - b);

// ________________________________________________________________

let numbers = [3, 2, 1];

let sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(sortedNumbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3]
*/

//////////////
export default sortedNumbers;
