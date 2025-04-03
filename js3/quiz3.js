//3) Write a code that hides email addresses by replacing the first 5 characters with ( * ) to
// prevent unauthorized access.
// Fitzzgerald@gmail.com => *****gerald@gmail.com

let email = "ghazaalnorouzi.d@gmail.com";
let result = email.replace(email.slice(0, 5), "*****");
console.log(result);
