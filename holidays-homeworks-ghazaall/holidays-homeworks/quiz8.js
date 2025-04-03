/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/

function comperDigit(num) {
  let myArray = num.toString().split("");
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[0] === myArray[i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(comperDigit(111111));
// _____________________________________________________________________________________________

// function comperDigit(num) {
//   const digits = num.toString().split("");
//   return digits.every((digit) => digit === digits[0]);
// }
