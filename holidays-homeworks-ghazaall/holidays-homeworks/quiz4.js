/*
4. Define a function with one parameter. 
The function returns a string starting with "The given argument was: " and ends with ". Ok?". Insert the argument between those two strings.
Example ===> 
string = "Francis" -->The given argument is: Francis. Ok?
*/

let userName = prompt("whats your favorit name?");

function stringReturn(str) {
  return `The given argument is: ${str}. Ok?`;
}
console.log(stringReturn(userName));
