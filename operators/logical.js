// logical AND (&&)

console.log("True & true:", true && true);
console.log("True & false:", true && false);

let a = 2;
let b = 21;
let x = a > b && b > a
console.log(x);

// Logical OR (||)
console.log("True & true:", true || false);
console.log("false & false:", false || false);

let y = a > b || b > a
console.log(y);

// Logical NOT (!)
console.log("!true:", !true);
console.log("!false:", !false);

let z = !(a > b)
console.log(z);
