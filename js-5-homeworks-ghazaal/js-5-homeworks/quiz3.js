//?Q-1:Write a code, give a number from 0 to 6, and show the day of the week (solve it with switch case).
// Please use variables given to you and Do Not change the name of them!!
/*
 0=>monday
1=>tuesday
...
*/

let number = 0;
let result;
switch (number) {
  case 0:
    result = "saturday";
    console.log(result);
    break;
  case 1:
    result = "sunday";
    console.log(result);
    break;
  case 2:
    result = "monday";
    break;
  case 3:
    result = "tuesday";
    break;
  case 4:
    result = "wednsday";
    console.log(result);
    break;
  case 5:
    result = "thursday";
    console.log(result);
    break;
  case 6:
    result = "friday";
    console.log(result);
    break;
  default:
    result = "you inter wrong number";
}
