//Create a program that:
//  (1) Generates a random number between 1 and 100, 
// (2) Uses Math.round(), Math.floor(), and Math.ceil() on a decimal number, 
// (3) Calculates the area of a circle with radius 7 using Math.PI, 
// (4) Finds the maximum and minimum of 5 numbers using Math.max() and Math.min(), 
// (5) Converts a string "123.456" to a number with 2 decimal places.




//  (1) Generates a random number between 1 and 100, 

var maxRandom =+(prompt("Task 1: Enter the maximum number for random generation (e.g., 100):"));
var randomNumber = Math.floor(Math.random() * maxRandom) + 1;
console.log("Task 1 - Random Number:", randomNumber);

// (2) Uses Math.round(), Math.floor(), and Math.ceil() on a decimal number, 

var numInput =+(prompt("Task 2: Enter a decimal number (e.g., 12.7):"));
console.log("Task 2 - Round:", Math.round(numInput));
console.log("Task 2 - Floor:", Math.floor(numInput));
console.log("Task 2 - Ceil:", Math.ceil(numInput));

// (3) Calculates the area of a circle with radius 7 using Math.PI, 
var radius =+(prompt("Task 3: Enter the radius of the circle:"));
var area = Math.PI * Math.pow(radius, 2);
console.log("Task 3 - Circle Area:", area.toFixed(2));

// (4) Finds the maximum and minimum of 5 numbers using Math.max() and Math.min(), 

var numbersInput = prompt("Task 4: Enter numbers separated by commas to find max and min (e.g., 10,25,7,90,3):");
var numbersArray = numbersInput.split(",").map(Number);
var maxNum = Math.max.apply(null, numbersArray);
var minNum = Math.min.apply(null, numbersArray);
console.log("Task 4 - Max:", maxNum);
console.log("Task 4 - Min:", minNum);


// (5) Converts a string "123.456" to a number with 2 decimal places.

var str = prompt("Task 5: Enter a number as string to convert (e.g., '123.456'):");
var converted = parseFloat(str).toFixed(2);
console.log("Task 5 - Converted Number:", converted);