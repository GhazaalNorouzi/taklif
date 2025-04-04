/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

let everyone = [
  "Bahar",
  "Fatemeh",
  "Mahjan",
  "Arad",
  "Pedram",
  "AmirMostafa",
  "Mohsen",
];

let firstFive = names.slice(0, 5);
let lastFive = names.slice(-5);

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
console.log(lastFive);

/* 
  EXPECTED RESULT
  ---------------
  ["Bahar", "Fatemeh", "Mahjan", "Arad", "Pedram"]
  ["Mahjan", "Arad", "Pedram", "AmirMostafa", "Mohsen"]
*/

///////////
export { firstFive, lastFive };
