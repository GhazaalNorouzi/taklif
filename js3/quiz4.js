//4) Write a code to concatenate a given string n times together.(Random times between 1 and 100)
let string = "hello world";
let random = Math.random() * 100;
let number = Math.round(random);
let newString = string.repeat(number);
console.log(newString);
