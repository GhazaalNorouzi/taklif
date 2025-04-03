/**
 * /*
 * john and mike both play basketball in diffrent teams. in the latest 3 games,
 *  !john's team scored 89 , 120 and 103 points,
 *  !while mike's team scored 116, 94 and 123 points.
 * todo1. calculate the average score for each team.
 * todo2. decide which teams wins in average( highest average score), and print the winner to the console. also include the average score in the output.
 * todo3. then change the scores to show diffrent winners . don't forget to take into
 *  account there might be a draw (the same average score)
 *
 *todo 4. EXTRA : Mary also plays basketball , and her team scored 97 , 134 and 105 points .
 *  like before , log the average winner to the console. Hint: you will need the && operator to
 *   take the decision .
 *
 * 5 . change the scores to generate diffrent winners , keeping in mind there might be draws.
 *
 * Gook Luck :D
 *
 *
 *
 *
 *
 *
 *
 *
 * john and his family went on a holiday and went to 3 diffrent restaurants.
 * ! the bill s were $124 , $48 and $268 .
 * to tip the waiter a fair amount , john created a simple tip calculator (as a function).
 *  He likes to tip %20 of the bill when the bill is less than $50 , 15% when the bill is between
 *   $50 and $200 , and 10% if the bill is more than $200.
 * In the end. John would like to have 2 arrays :
 * 1) containing all three tips (one for each bill)
 * 2) containing all three final paid amounts (bill + tip)
 *  Good Luck
 *
 * @format
 */

//  first challenge:

function calcAvreg(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const jonAvg = calcAvreg(89, 129, 103);
const mikeAvg = calcAvreg(116, 94, 123);
const maryAvg = calcAvreg(97, 134, 105);
console.log(jonAvg, mikeAvg, maryAvg);

function checkWinner(team1, team2, team3) {
  if (jonAvg > mikeAvg && jonAvg > maryAvg) {
    return `john's Team winn with ${jonAvg} point `;
  } else if (mikeAvg > jonAvg && mikeAvg > maryAvg) {
    return `mike's Team winn with ${mikeAvg} point `;
  } else if (maryAvg > jonAvg && maryAvg > mikeAvg) {
    return `mary's Team winn with ${maryAvg} point `;
  } else {
    return "no team winns";
  }
}
console.log(checkWinner(jonAvg, maryAvg, mikeAvg));

// ____________________________________________________________________________________________________________--
// challeng2:

const bills = [124, 48, 268];
const tip = [];
const total = [];

function calcTip(bill) {
  if (bill <= 50) {
    return bill * 0.2;
  } else if (bill > 50 && bill <= 200) {
    return bill * 0.15;
  } else if (bill > 200) {
    return bill * 0.1;
  }
}

for (let i = 0; i < bills.length; i++) {
  tip.push(Math.floor(calcTip(bills[i])));
  total.push(`${bills[i]}:${Math.floor(calcTip(bills[i]))}`);
}

console.log(tip);
console.log(total);
