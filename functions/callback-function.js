// function get are passed as arguments to other function

// why use callback-function?
// asynchronous operation
// avoid blocking code execuition

function greetUser(name){
    console.log(`Hello, ${name}`);   
}

//this funciton takes another function (callback) as function
function greetUserInput(callback){
    const name = "Liyara";
    callback(name);
}
//getuserinput pass greetuser a callback
greetUserInput(greetUser);