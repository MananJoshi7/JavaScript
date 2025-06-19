// singleton 
// Object.create

// object literals
const mySym = Symbol("key1");
const mySym1 = Symbol("user123");
const JsUser = {
    name:"Manan",
    "full name": "Manan Joshi",
    [mySym]: "myKey9",
    age:18,
    location:"Junagadh",
    email:"manan@gmail.com",
    isLoggedIn: false,
}

JsUser.greetings = function(){
console.log(`'Welcome back, ${this.name}`);
}
console.log(JsUser.greetings());


console.log(typeof mySym);
console.log(JsUser);

JsUser.email = "mananjoshi@chatgpt.com";
console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "mananjoshi@microsoft.com";

JsUser.greetings = function(){
    console.log("Hello Js User");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JsUSer ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());