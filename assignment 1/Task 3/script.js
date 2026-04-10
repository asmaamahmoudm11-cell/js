//Create a program with a day number (1-7): 
// (1) Use a switch statement to print the day name,
//  (2) Use another switch with fall-through to classify as "Weekday" or "Weekend",
//  (3) Use if...else to check if it's a valid day (1-7) or invalid,
//  (4) Create a function that returns true if it's a weekend, false otherwise (using ternary).

var dayNumber =+(prompt("Enter a day number (1-7):"));

if (dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid day");
} else {
 // (1) Use a switch statement to print the day name,
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }

//  (2) Use another switch with fall-through to classify as "Weekday" or "Weekend",
    var type;
    switch (dayNumber) {
        case 6:
        case 7:
            type = "Weekend";
            break;
        default:
            type = "Weekday";
            break;
    }
    console.log("Type:", type);

  //  (3) Use if...else to check if it's a valid day (1-7) or invalid,
    function isWeekend(day) {
        return (day === 6 || day === 7) ? true : false;
    }
    console.log("Is Weekend?:", isWeekend(dayNumber));
};
 
var dayNumber=+prompt("Enter Day Number");
var isWeekend = (dayNumber<7)? console.log("false") : console.log("true");


