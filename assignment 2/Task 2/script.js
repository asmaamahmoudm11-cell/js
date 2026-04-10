// Given array [12, 45, 67, 23, 89, 34, 56]: (1) Use for...of to calculate sum and average, (2) Find the largest number using a loop,
//  (3) Count how many numbers are greater than 50, (4) Create a new array with each number doubled, 
// (5) Use break to find first number divisible by 7.
// ================================
// Interactive Version using var only
// ================================

// Ask user to enter numbers separated by commas
var numbersInput = prompt("Enter an array of numbers separated by commas (e.g., 12,45,67,23,89,34,56):");
var numbers = numbersInput.split(",").map(Number);

// (1) Use for...of to calculate sum and average
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
var average = sum / numbers.length;
console.log("Task 1 - Sum:", sum);
console.log("Task 1 - Average:", average);

// (2) Find the largest number using a loop
var largest = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Task 2 - Largest number:", largest);

// (3) Count how many numbers are greater than 50
var countGreaterThan50 = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        countGreaterThan50++;
    }
}
console.log("Task 3 - Numbers greater than 50:", countGreaterThan50);

// (4) Create a new array with each number doubled
var doubledArray = [];
for (var i = 0; i < numbers.length; i++) {
    doubledArray.push(numbers[i] * 2);
}
console.log("Task 4 - Doubled array:", doubledArray);

// (5) Use break to find first number divisible by 7
var divisibleBy7 = null;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 7 === 0) {
        divisibleBy7 = numbers[i];
        break;
    }
}
console.log("Task 5 - First number divisible by 7:", divisibleBy7);
 
