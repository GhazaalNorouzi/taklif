/*
18. Write a function to check whether the first and last elements in an array of integers are the same..

Example ===>
[50, 20, 130, 50] = true
[50, 20, 130, 52] = false
*/
function firstAndLastSame(arr) {
  return arr[0] === arr[arr.length - 1];
}
console.log(firstAndLastSame([50, 20, 130, 50]));
console.log(firstAndLastSame([50, 20, 130, 52]));
