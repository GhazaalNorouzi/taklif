/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/
function check4and6(arr) {
  return arr.includes(6) ? false : arr.includes(4) ? false : true;
}
console.log(check4and6([3, 5]));
console.log(check4and6([2, 4]));
