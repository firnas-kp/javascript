// one class can inherit properties and methods from another.
//(oru classile properties methods inherit cheyyuka)

// base
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}       

let dog = new Dog('Rex');
dog.speak();
class Cat extends Animal {
    speak() {
        super.speak(); 
        console.log(`${this.name} meows.`);
    }       
}
let cat = new Cat('Whiskers');
cat.speak();