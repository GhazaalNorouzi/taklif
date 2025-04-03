/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/
function bigestEvenNumber(arr) {
  const evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }
  const sortEvenArray = evenArray.sort((a, b) => a - b);
  return sortEvenArray[sortEvenArray.length - 1];
}

const array = [20, 40, 200, 301];
console.log(bigestEvenNumber(array));
