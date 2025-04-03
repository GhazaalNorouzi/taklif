// 🌟 Open your vscode, then try to solve the following questions there. Finally, send your javascript file considering your answers.
// 1️⃣. Write a code that capitalizes all letters of your name.

// 2️⃣. Write a code that writes all the letters of your name in lowercase.

// 3️⃣. Write code that shows the length of your name in the output.

// 4️⃣. Write a code that removes the empty space of a string. For example, "   hello    " should be transformed into "hello".

// 5️⃣. Write code that stores your first name in one variable and your last name in another, then show them side by side in the console.

// 6️⃣. Write a code that stores your first and last name in a variable, but only shows the last name in the console. (use string indexing with [])

// 7️⃣. Write a code that shows the following text as string in the console:
// "Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.

// 8️⃣. There is a const variable named "abc" given to you to use for the following questions:
// const abc = 'abcdefghijklmnopqrstuvwxyz'
// ● Return your name using the abc variable and string indexing with [].
// ● Return "APSignals" using the abc variable and string indexing with [].

let myName = "GHazaal";

let result1 = myName.toUpperCase();
console.log(result1);

let result2 = myName.toLowerCase();
console.log(result2);

let result3 = myName.length;
console.log(result3);

let variable = "       ghazaal     ";
let result4 = variable.trim();
console.log(result4);

let fname = "ghazaal";
let lname = "norouzi";
let result5 = `my name is ${fname} ${lname}`;
console.log(result5);

let fullName = "ghazaal norouzi";
let result6 = fullName.slice(8, 16);
console.log(result6);

let result7 =
  '"Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero\'s De Finibus Bonorum et Malorum" for use in a type specimen book';
console.log(result7);

const ghazaal = abc[6] + abc[7] + abc[0] + abc[1] + abc[0] + abc[0] + abc[11];
console.log(ghazaal);

const apSignals =
  abc[0].toUpperCase() +
  abc[15].toUpperCase() +
  abc[18].toUpperCase() +
  abc[8] +
  abc[6] +
  abc[13] +
  abc[0] +
  abc[11] +
  abc[18];
console.log(apSignals);
