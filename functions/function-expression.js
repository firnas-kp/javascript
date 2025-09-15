// is a way to define function inside an expression & assign it to a var

// key features
// 1.Anomymous or named
// 2.not hoisted
// 3.can be used as argument
// 4.can be assigned to variable/Object

const sayHello = function(){
    console.log("Hello!");
}

sayHello();

// example for Object

const math = {
    add: function(a,b){ //parameter
        return a + b;

    }
}
console.log(math.add(5,3)); //argument
