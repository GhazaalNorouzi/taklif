// Using the .map() method, create a new array with numbers multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// ____________________________________________________________________________

function multiple(number) {
  return number * 100;
}
let numbersMultiplied = numbers.map(multiple);
console.log(numbersMultiplied);

// _______________________________________________________________________

let numbersMultiplied = numbers.map(function (multiple) {
  return number * 100;
});
// _________________________________________________________________________________

let numbersMultiplied = numbers.map((multiple) => {
  return number * 100;
});
