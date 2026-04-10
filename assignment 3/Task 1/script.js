//task1
function greet(name){
    console.log("Hello, " + name);
}greet("Asmaa");

 //task2
function addNumbers(num1, num2){
    return num1 + num2;
}var result = addNumbers(4, 3);
console.log(result);


//task 3
function isEven(number){
    if (number % 2 === 0){
        return true;
    } else {
        return false;
    }
}console.log(isEven(4));
console.log(isEven(7));

//task (4)
function calculate(num1, num2, operator){
    if (operator === "+"){
        return num1 + num2;
    } 
    else if (operator === "-"){
        return num1 - num2;
    } 
    else if (operator === "*"){
        return num1 * num2;
    } 
    else if (operator === "/"){
        return num1 / num2;
    } 
    else {
        return "Invalid operator";
    }
}

console.log(calculate(3, 2, "+"));
console.log(calculate(8, 5, "-"));
console.log(calculate(5, 2, "*"));
console.log(calculate(6, 2, "/"));

//task(5)
