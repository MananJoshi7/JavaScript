// Primitive datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const name = "Man";
// const score = 100;
// const isLoggedIn = false;
// const outsideTemp = null;
// let username;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === a);


// Non Primitive datatypes (Reference datatypes)
// Array, Objects, Functions
// const heros = ["shakitman","naagraj","doga"];
// let myObj = {
//     name: "Manan",
//     age: 21
// }
// const myFunction = function(){
//     console.log("Hello World");
// }


// Type of value                                Result
// Undefined                                  "undefined"
// Null                                       "object"
// Boolean                                    "boolean"  
// Number                                     "number"
// String                                     "string"
// Object(native and does not                 "object"
//     implement [[Call]])
// Object(native or host and                  "function"
//     does implement [[Call]])

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)    Heap(Non-Primitive)

let myName = "Manan";
let anoterName = myName;
anoterName = "Joshi";
console.log(myName);
console.log(anoterName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "manan@google.com"
console.log(userOne.email);
console.log(userTwo.email);