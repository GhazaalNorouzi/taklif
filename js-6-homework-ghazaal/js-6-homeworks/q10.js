//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85

function calculateCircleArea(radius) {
  const circleArea = radius ** 2 * Math.PI;
  return circleArea;
}
console.log(calculateCircleArea(3));

function calculateCircleCircumference(radius) {
  const circumference = radius * 2 * Math.PI;
  return circumference;
}
console.log(calculateCircleCircumference(3));
