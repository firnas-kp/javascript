const prompt = require('prompt-sync')();
let temperature = prompt("Enter the temp: ");

if (temperature > 20) {
    console.log("It's warm outside");
    
} else {
    console.log("It's cool outside");
}