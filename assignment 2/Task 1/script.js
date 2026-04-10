//Create: (1) A for loop that prints numbers 1-20, skipping multiples of 3 using continue,
//  (2) A while loop that generates random numbers until it gets a number greater than 0.9, 
// (3) A for loop that counts backwards from 50 to 1, printing only even numbers,
//  (4) A do...while loop that asks user for input until they type "exit".



var output = document.getElementById("output");

//Create: (1) A for loop that prints numbers 1-20, skipping multiples of 3 using continue,
function task1() {
    output.innerHTML = "<h3>Task 1 Result:</h3>";
    var start = parseInt(prompt("Task 1: Enter starting number (e.g., 1):"));
    var end = parseInt(prompt("Task 1: Enter ending number (e.g., 20):"));
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0) continue;
        output.innerHTML += i + " ";
    }
}

//  (2) A while loop that generates random numbers until it gets a number greater than 0.9,
function task2() {
    output.innerHTML = "<h3>Task 2 Result:</h3>";
    var num = 0;
    while (num <= 0.9) {
        num = Math.random();
        output.innerHTML += num.toFixed(2) + "<br>";
    }
}

// (3) A for loop that counts backwards from 50 to 1, printing only even numbers,
function task3() {
    output.innerHTML = "<h3>Task 3 Result:</h3>";
    var start =+(prompt("Task 3: Enter starting number (e.g., 50):"));
    var end =+(prompt("Task 3: Enter ending number (e.g., 1):"));
    for (var i = start; i >= end; i--) {
        if (i % 2 === 0) {
            output.innerHTML += i + " ";
        }
    }
}


//  (4) A do...while loop that asks user for input until they type "exit".

function task4() {
    var input;
    output.innerHTML = "<h3>Task 4 Result:</h3>";
    do {
        input =+prompt("Task 4: Enter something (type 'exit' to stop):");
        if (input !== "exit") {
            output.innerHTML += "You entered: " + input + "<br>";
        }
    } while (input !== "exit");
    output.innerHTML += "Exited the loop.";
}

