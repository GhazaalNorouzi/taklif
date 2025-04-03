/*
2. Write a function that converts a 2D array into a 1D array.
Example ===> [[1, 2, 3], [4, 5, 6], [7, 8, 9]] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
// with .map()

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const newArr = [];

// _________________________way1:_________________________
// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   const newArr = [];

// function convertTo1D(arr) {
//   arr.map((i) => i.map((j) => newArr.push(j)));
// }
// convertTo1D(array);
// console.log(newArr);
// _______________________________way2: ______________________________;

const arrToConvert = [
  [0, 0, 1],
  [2, 3, 3],
  [4, 4, 5],
];
let newArr = []; //if i decler newArr with const dosnt work why??????????????????????

for (let i = 0; i < arrToConvert.length; i++) {
  newArr = newArr.concat(arrToConvert[i]);
}

console.log(newArr);
