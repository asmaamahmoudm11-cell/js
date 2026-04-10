

// Create: (1) A 10x10 multiplication table using nested loops, (2) A pyramid pattern with 7 rows using stars (*),
//  (3) A program that finds all pairs of numbers from two arrays [1,2,3] and [4,5,6], 
// (4) Process a 2D array of student scores and calculate average for each student.





// (1) A 10x10 multiplication table using nested loops,
var tableSize =+(prompt("Enter the size for multiplication table (e.g., 10):"));
console.log("10x10 Multiplication Table:");
for (var i = 1; i <= 10; i++) {
    var row = "";
    for (var j = 1; j <= 10; j++) {
        row += (i * j).toString().padStart(4, " "); 
    }
    console.log(row);
}

//  (2) A pyramid pattern with 7 rows using stars (*),
var pyramidRows =+(prompt("Task 2: Enter number of rows for the pyramid (e.g., 7):"));
console.log("\nPyramid Pattern (7 rows):");
const rows = 7;
for (var i = 1; i <= rows; i++) {
    var stars = "*".repeat(i * 2 - 1); // عدد النجوم في كل صف
   var spaces = " ".repeat(rows - i);  // مسافة قبل النجوم
    console.log(spaces + stars + spaces);
}

//  (3) A program that finds all pairs of numbers from two arrays [1,2,3] and [4,5,6], 
var arr1Input =+prompt(" Enter first array numbers separated by commas (e.g., 1,2,3):");
var arr2Input =+prompt(" Enter second array numbers separated by commas (e.g., 4,5,6):");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log("\nAll pairs from [1,2,3] and [4,5,6]:");
for (const a of arr1) {
    for (const b of arr2) {
        console.log(`(${a}, ${b})`);
    }
}

// (4) Process a 2D array of student scores and calculate average for each student.
let numStudents =+(prompt("Enter number of students:"));
const studentScores = [
    [80, 90, 70], // طالب 1
    [60, 75, 85], // طالب 2
    [90, 95, 100] // طالب 3
];

console.log("\nAverage score for each student:");
studentScores.forEach((scores, index) => {
    const sum = scores.reduce((acc, val) => acc + val, 0);
    const average = sum / scores.length;
    console.log(`Student ${index + 1}: ${average}`);
});
