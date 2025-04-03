/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/
function numberOfCommon(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result.length;
}
const list1 = [1, 2, 3, 4, 5];
const list2 = [3, 4, 5, 6, 7, 8, 9, 19, 20];
console.log(numberOfCommon(list1, list2));
