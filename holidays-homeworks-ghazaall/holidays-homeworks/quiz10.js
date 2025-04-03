/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/
// todo: دنبال یه راه دیگه بگرد

function characterRemove(str) {
  let result = "";
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      result += char;
    }
  }
  return result;
}

console.log(characterRemove("ghazaal"));
