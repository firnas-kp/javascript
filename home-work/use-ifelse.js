const prompt = require('prompt-sync')();
let number = prompt("Enter the number: ");

if (number > 0) {
    console.log("number is big");
    
} else {
    console.log("number is small");
}