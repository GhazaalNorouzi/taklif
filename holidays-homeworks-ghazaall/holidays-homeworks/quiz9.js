/*
9. Write a function to test whether a given integer is greater than 20 and return the given number, otherwise return 20.
Example ===>
123 = 123
10 = 20
*/

let number = Number(prompt("number?"));
function whatsNumber(num) {
  return num > 20 ? num : 20;
}
console.log(whatsNumber(number));
