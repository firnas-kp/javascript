// object is a collection of key-value pairs
// used to multiple values in a single variable & the values

const person = {
    name: 'firnas',
    age: 20,
    isStudent: true
}

console.log(person.name);
console.log(person["age"]);

person.city = "new york";
person.age = 21;

delete person.city;
console.log(person);