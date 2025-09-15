// usefull when comparing a single value against multiple element to a value
const prompt = require('prompt-sync')();
let day = prompt("Enter the day: ");

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("regular day");
        break;
}