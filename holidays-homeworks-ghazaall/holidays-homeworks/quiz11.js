/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/

function countOfEven(num) {
  let myAraay = num.toString().split("");

  let count = 0;
  for (let i = 0; i < myAraay.length; i++) {
    if (Number(myAraay[i]) % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countOfEven(176));
