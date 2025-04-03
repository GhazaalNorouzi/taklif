/**
 * /*
 *   Array properties
 *   ----------------
 *   Complete the function to test if an array is empty (has no values in it)
 *
 * @format
 */
answer1:
function isEmpty(arr) {
  return arr.length > 0; // complete this statement
}

________________________________________________________________
/*
answer2:

function isEmpty(arr) {
  if (arr.length > 0) {
    return true;
  } else {
    return false;
  }
}
*/
// ____________________________________________________________________
/* answer3:
function isEmpty(arr) {
  if (arr.includes(arr[0])) {
    return true;
  } else {
    return false;
  }
}
  */

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
