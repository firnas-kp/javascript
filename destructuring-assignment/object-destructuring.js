const person = {name: "firnas", age: 20,country: "India"}

// basic destructuring
const {name, age} = person;
console.log(name);
console.log(age);

// rename vaiables
const {country: nation} = person;
console.log("nation: ", nation);

// default value
const {gender = 'Male'} = person;
console.log("person: ",gender);


console.log("person..",person);