// const promise = new Promise((resolve,reject) => {
//     asynchronous operation
// })

// resolve:-called when operation is successfulll
// reject:-called when operation is failed

// .then = execute the promise is resolve
// .catch:- execute the promise is rejected
// .finally:- the promise

// new promise - create a new promise object

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve('Promise resolved successfully!')
        } else {
            reject('Promise rejected')
        }
    }, 2000)
})

myPromise
    .then(result => console.log(result)) /* run is the promise resolved */
    .catch(error => console.log(error)) /* run is the promise rejected */
    .finally(() => console.log("Promise execution finished!")) //Always