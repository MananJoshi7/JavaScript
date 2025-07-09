const promiseOne = new Promise ( (resolve, reject) => {
    // Do as async task
    // DB calls, cryptography, network
    setTimeout( () => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
} )
promiseOne.then( () => {
    console.log("Promise consumed")
} )