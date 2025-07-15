// var a;         // declarations
// var a = 9;     // declarations and initialization 
// var window mein add hota hai
// var function scoped hota hai
// var aap firse same name sai use kar sakto ho error nahi aaye ga
// var a = 9;         // global scope

// {
//     let a = 9;     // blocked scope
// }

// function abcd(){
//     if(true){
//         var a = 9; // functional scope
//     }
// }

// // Reassigment, Redeclaration 
// // Redecalaration is only possible with var

// var a = 9;
// a = 10;
// var a = 11;

// let b = 9;
// b = 10;
// let b = 11; // We can't redeclare the same variable under the let

// Hoisting -> ek varibale ko jab js mai bane te hai to wo varible do hisso mai toot jata hai and uska declare part upper chala jata hai and uska 
// initialization part neeche reh jata hai
// console.log(a)
// let a = 9;



const accountId = 789
let accountEmail = "man@gmail.com";
var accountPassword = "1234";
accountCity = "Rajkot";
accountEmail = "abc@gamil.com";
accountPassword = "212121";
accountCity = "Junagadh";
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Prefer not to use the var beacuse of issue in block scope and functional scope
*/