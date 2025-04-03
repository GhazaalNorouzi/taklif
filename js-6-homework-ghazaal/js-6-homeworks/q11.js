//?:Write a function called operation that calculate the square, double and cube of a number
// Get a number and operator from the user and calculate the number based on the operator.(^=square, **=double, ***=cube)

function operation(number) {
  const square = number ** 2;
  const double = number * 2;
  const cube = number ** 3;
  return [square, double, cube];
}
console.log(operation(5));
