// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number (hint: use parseInt())
// todo3: remove all the items that are NaN: (hint: use isNaN())
// todo4: calculate the sum of all its numbers
// !Answer:

// step 1 from previous question:
function SumNumbers() {}

const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]
const notNumberArrayFillterd = [];

function removeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") continue;
    notNumberArrayFillterd.push(arr[i]);
  }
  return notNumberArrayFillterd;
}
removeNumbers(notNumberArray);

console.log(notNumberArrayFillterd);

// step 2:
const convertedNumber = [];
const invalidValues = [];

function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    const convert = parseInt(arr[i]);

    if (!isNaN(convert)) {
      convertedNumber.push(convert);
    } else {
      invalidValues.push(arr[i]); //
    }
  }
}

convertToNumber(notNumberArrayFillterd);
console.log(convertedNumber);

// step3:
function calcSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcSum(convertedNumber));
