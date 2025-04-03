//========================?Q-5==================================
//? Luke Skywalker has family and friends.help him remind them who is who.given a string with a name, return the relation of that person to luke.(check the example)

/*
Person         Relation
-----------------------
Darth Vadar    Father
Leia          sister 
Han           Brother in law
R2D2          droid

*/

// //!Example:
// let person = "Leia";
// if (person === "Han") {
//   console.log("Brother in low");
// }

var person = "Han";

if (person === "Darth Vadar") {
  console.log("Father");
} else if (person === "Leia") {
  console.log("Sister");
} else if (person === "Han") {
  console.log("Brother in law");
} else if (person === "R2D2") {
  console.log("Droid");
}
