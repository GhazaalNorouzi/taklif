//========================?Q-1==================================
//Answer these questions about comparison
//todo-1:Write a console log to check whether a number is greater than the other and get the output.
//todo-2:define three numbers then in the console log check the second one is equal or greater than the first.
//todo-2-1:Then check the third one is equal or greater than the first.

let number1 = 8;
let number2 = 10;
let number3 = 12;
// ! (1)
console.log(number1 > number2);
// !(2)
console.log(number2 >= number1);
// !(2-1)
console.log(number3 >= number1);
//todo-3:In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.

const numOne = 3;
const numTwo = 4;
const numThree = 2;

console.log(numOne >= numThree, numTwo >= numOne);

//todo-4:In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numberOne is less than or equal the value of numberTwo. It also checks whether the value of numberTwo is less than or equal the value of numberThree. Change the code so that both expressions in the console.log() statement logs true.

const numberOne = 1;
const numberTwo = 4;
const numberThree = 2;
console.log(numberThree <= numberTwo, numberOne <= numberThree);
