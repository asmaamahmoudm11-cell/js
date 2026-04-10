

//Create a grade calculator that takes a score (0-100) and:
//  (1) Uses if...else if to assign letter grades (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60),
//  (2) Creates the same logic using a switch statement,
//  (3) Creates a one-line version using nested ternary operators, 
// (4) Adds pass/fail status (pass >= 60) using a ternary operator.



//Create a grade calculator that takes a score (0-100) and:
var score =+(prompt("Enter the student's score (0-100):"));
var grade;
//  (1) Uses if...else if to assign letter grades (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60),
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade (if):", grade);

//  (2) Creates the same logic using a switch statement,
switch (true) {
  case (score >= 90):
    grade = "A";
    break;
  case (score >= 80):
    grade = "B";
    break;
  case (score >= 70):
    grade = "C";
    break;
  case (score >= 60):
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade (switch):", grade);


//  (3) Creates a one-line version using nested ternary operators,

var gradeTernary = 
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";

console.log("Grade (ternary):", gradeTernary);


// (4) Adds pass/fail status (pass >= 60) using a ternary operator.
var status = score >= 60 ? "Pass" : "Fail";
console.log("Status:", status);