const numbers = [10,20,30,40];

//basic destructuring
const [a,b] = numbers;
console.log(a); //10
console.log(b); //20

// skiping values
const[, , c] = numbers;
console.log(c);

// using rest operator
const [x,...rest] = numbers;
console.log("x is: ",x);
console.log(rest);