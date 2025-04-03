// ? Question-3:write a function to remove all the items which are number from the array and return the array
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]
const notNumberArrayFillterd = [];

// !Answer:
function removeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") continue;
    notNumberArrayFillterd.push(arr[i]);
  }
  return notNumberArrayFillterd;
}
removeNumbers(notNumberArray);

console.log(notNumberArrayFillterd);

//* notic:
//* This code only checks if an element is a number.
//* If it is a number, it proceeds to the next iteration of the loop,
//* but no operation is performed to remove the number.
//*  Therefore, when I log the (notNumberArray), it shows the original array.
//*  So, I added  "notNumberArrayFillterd.push(arr[i]);" to push the elements that are not numbers into a new array.
