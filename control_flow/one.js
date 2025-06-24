// <, >, <=, >=, ==, !=, ===, !==


const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(userLoggedIn && debitCard){                  // Both the condition become true then only it will execute       (Use &&)
    console.log("Allow to buy course");
}
if(LoggedInFromEmail || LoggedInFromGoogle){    // If any of the condition becomes true then also it will execute (Use ||)
    console.log("User Looged In");
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10   // 5
// val1 = null ?? 10   // 10
// val1 = undefined ?? // 15
// val1 = null ?? 10 ?? 20 // 10

console.log(val1);

const number = 9;
if(number > 10){
    console.log("Number is greater than 10");
}
else if(number <= 20){
    console.log("Number is less than or equal to 20");
}
else if(number === 15){
    console.log("Number is equal to 15")
}
else{
    console.log("No matched");
}

const age = 22;
if(age > 18){
    console.log("You are older then 18");
}
else if(age < 18){
    console.log("You are younger then 18");
}
else{
    console.log("You are children");
}