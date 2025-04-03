//?Q-6:Read these documents and write an example for each method.
//todo-1:https://www.programiz.com/javascript/library/array/includes
//todo-2:https://www.programiz.com/javascript/library/array/indexof
//todo-3:https://www.programiz.com/javascript/library/array/slice
//todo-4:wwwhttps://.programiz.com/javascript/library/array/sort

let languages = [
  "JavaScript",
  "Java",
  "C",
  "Python",
  "C++",
  "PHP",
  "Rubay",
  "Go",
  "R",
  "SWIFT",
  "Kotlin",
];
let example1 = languages.includes("JavaScript");
console.log(example1);

let example2 = languages.indexOf("Java");
console.log(example2);

let example3 = languages.slice(5, 9);
console.log(example3);

let example4 = languages.sort();
console.log(example4);
