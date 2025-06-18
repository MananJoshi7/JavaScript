// singleton 
// Object.create

// object literals
const mySym = Symbol("key1");
const JsUser = {
    name:"Manan",
    "full name": "Manan Joshi",
    [mySym]: "myKey9",
    age:18,
    location:"Junagadh",
    email:"manan@gmail.com",
    isLoggedIn: false,
}
console.log(typeof mySym);
console.log(JsUser);

JsUser.email = "mananjoshi@chatgpt.com";
console.log(JsUser);
Object.freeze(JsUser);
JsUser.email = "mananjoshi@microsoft.com";