class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start(){
        console.log(this.brand + " engine started");
    }
    }
    class Car extends Vehicle{
        drive(){
            console.log(this.brand + " is driving smoothly");
        }
    }

    let myCar = new Car("RANGE ROVER");
    myCar.start();
    myCar.drive();