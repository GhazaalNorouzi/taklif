// ? Question-5:write a function to reverse a string.(hint:first,convert to array,but the answer must to be string)
// ? "google" => "elgoog"
// ! you can search how to reverse string
// search about split(), reverse(), join()

const s = "Hello";
const a = s.split("");
console.log(a);

// !Answer:

const string = "google";

function reverseString(str) {
  const myArr = str.split("");
  const reverseArr = myArr.reverse();
  const newString = reverseArr.join("");

  return newString;
}
console.log(reverseString(string));
