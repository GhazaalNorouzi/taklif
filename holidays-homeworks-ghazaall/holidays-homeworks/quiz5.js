/* 
5. Define a function that takes an array of numbers as its parameter. 

The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/

const array = [1, 22, 30, 27, 44, 3, 5, 99];
function arrayInfo(arr) {
  const length = arr.length;
  const sort = arr.sort((a, b) => a - b);
  const small = sort[0];
  const big = sort[sort.length - 1];
  let sum = 0;
  for (let i = 0; i < sort.length; i++) {
    sum += sort[i];
  }
  const avg = sum / length;
  const info = [length, small, big, avg];
  return info;
}
console.log(arrayInfo(array));
