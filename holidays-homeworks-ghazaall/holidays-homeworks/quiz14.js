/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = azaraaaam
*/

const sentence = prompt("say someting");

function bigestWord(str) {
  let words = str.split(" ");

  let bigWord = " ";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > bigWord.length) {
      bigWord = words[i];
    }
  }
  return bigWord;
}

console.log(bigestWord(sentence));
