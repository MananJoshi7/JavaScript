// const promiseOne = new Promise ( (resolve, reject) => {
//     // Do as async task
//     // DB calls, cryptography, network
// //     setTimeout( () => {
// //         console.log('Async task is complete');
// //         resolve()
// //     }, 1000)
// // } )
// // promiseOne.then( () => {
// //     console.log("Promise consumed")
// // } )


new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Async task 2");
        resolve()
    }, 1000)
} ).then( () => {
    console.log("Async 2 resolved");
} )

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({username:"Manan", email:"manan@gmail.com"})
    }, 1000)
} )
promiseThree.then( (ram) => {
    console.log(ram)
} )



const promiseFour =  new Promise( (resolve, reject) => {
    setTimeout ( () => {
        let error = false
        if(!error){
            resolve({username:"RAM", password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
} )
promiseFour.then( (user) => {
    console.log(user);
    return user.username
} )
.then( (username) => {
    console.log(username)
} )
.catch( (error) => {
    console.log(error)
} )
.finally( () => {
    console.log("The promise is either resolved or rejected")
} )



const promiseFive = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        let error = true
        if(!error){
            resolve({username: "javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
} )
async function consumePromiseFive(){
        try{
            const respose = await promiseFive
            console.log(respose)
        }
        catch(error){
            console.log(error)
        }
}
consumePromiseFive()


async function getAllUsers(){
    try{
        const respose = await fetch("https://api.github.com/users/mananjoshi7")
        const data = await respose.json()
        console.log(data);
        }
        catch(error){
            console.log("E:", error)
        }
    }
getAllUsers()
