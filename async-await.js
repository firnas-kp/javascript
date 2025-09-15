// async make a function that will return a promise 
// await pauses the function execution untill the promise is resolved or reject
// look & behave like synchronous (more efficient & responsive)

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded!")
        },2000)
    });
} 

async function getData() {
    console.log("start");

    const result = await fetchData(); //wait for 2suntill the promise is resolved
    console.log(result);

    console.log("End"); 
}
getData();