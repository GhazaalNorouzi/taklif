/**
 * /* Fix Functions
 *
 *   Aim: to understand the change code inside functions
 *
 *   See the below functions. They are syntactically correct but are not outputting the right results.
 *
 *   Run the tests and see how you can fix them.
 *
 *   NOTE:Only make edits inside the function
 *
 * @format
 */
function mood(isHappy) {
  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10(num) {
  let isBigEnough = num > 10;

  if (isBigEnough) {
    return "num is greater than 10";
  } else {
    return "num is not big enough";
  }
}

function sortArray(letters) {
  let sortedLetters = letters.sort();

  return sortedLetters;
}

function first5(numbers) {
  let sliced = numbers.slice(0, 5);

  return sliced;
}

function get3rdIndex(arr) {
  let index = 3;
  let element = arr[index];

  return element;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
===================================================
*/
function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test("mood function works for true", mood(true), "I am happy");
test("mood function works for false", mood(false), "I am not happy");
test(
  "greaterThanTen function works for 11",
  greaterThan10(11),
  "num is greater than 10"
);
test(
  "greaterThanTen function works for 10",
  greaterThan10(10),
  "num is not big enough"
);
test(
  "greaterThanTen function works for 9",
  greaterThan10(9),
  "num is not big enough"
);
test("sortArray function works", sortArray(["a", "n", "c", "e", "z", "f"]), [
  "a",
  "c",
  "e",
  "f",
  "n",
  "z",
]);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
test("first5 function works", first5(numbers), [1, 2, 3, 4, 5]);
if (!arraysEqual(numbers, [1, 2, 3, 4, 5, 6, 7, 8])) {
  console.log("PROBLEM: first5 changed its input array - it shouldn't!");
}

test(
  "get3rdIndex function works - case 1",
  get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]),
  "strawberry"
);
test(
  "get3rdIndex function works - case 2",
  get3rdIndex([11, 37, 62, 18, 19, 3, 30]),
  18
);
