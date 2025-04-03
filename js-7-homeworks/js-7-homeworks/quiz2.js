// ? Question-2:write a function to find the biggest number in this  array and push it to a new array

const findBigNumber = [5, 2, -10, 50, 35];
const newArr = [];
// !Answer:
function findBiggestNumber(arr) {
  const sortingArr = arr.sort((a, b) => a - b);

  newArr.push(sortingArr[sortingArr.length - 1]);
}

findBiggestNumber(findBigNumber);
console.log(newArr);
