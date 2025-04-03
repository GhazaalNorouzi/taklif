/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

// let result = statement.indexOf("not");
// console.log(result);
let newStatment = statement.substring(0, 5) + statement.substring(8);
console.log(newStatment);

/* EXPECTED OUTPUT 
  "I do like programming"
  
*/
