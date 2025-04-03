/*

1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/

/*


function numberOfVowels(str) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.length;
}
console.log(numberOfVowels("sarAa"));
*/
// ___________________________________________________________way2:_______________________________________
/*
function numberOfVowels(str) {
  return str.match(/[aeiou]/gi).length;
}
console.log(numberOfVowels("ghAzaali"));
*/
// ___________________________________________________________way3:____________________________________________

// function numberOfVowels(str) {
//   return str.split("").filter((word) => "aeiouAEIOU".includes(word)).length;
// }

// console.log(numberOfVowels("sourenA"));
