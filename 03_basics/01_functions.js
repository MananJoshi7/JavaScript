function sayMyName (){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
}
sayMyName();

function addThreeNumbers(number1, number2, number3){
    console.log(number1+number2+number3);
}
addThreeNumbers(1,3,5); // 9

function addTwoNumbers(number1, number2){
    // let result = number1 + number2

    return number1 + number2
}
const result = addTwoNumbers(5,5);
console.log("Result:", result); // When you are taking the retrun then you just need to use the console log if you don't use it
                                // then it will doesn't show the output.


function loginusermessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} logged in`
}
console.log(loginusermessage());




// Test 
// Print Letters
function enteryourname(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
}
enteryourname()


//  Sum Three Numbers
function add3num(num1, num2, num3){
console.log(num1+num2+num3);
}
add3num(1,3,5);

function plus3num(num1,num2,num3){
    let result = num1+num2+num3;
    return result
}
console.log(plus3num(1,3,5));


// Sum Two Numbers (Return)
function addtionof3num(num1,num2,num3){
    return num1+num2+num3;
}
console.log(addtionof3num(1,3,5));



function adding2num(num1,num2){
    return num1+num2;
}

const result1 = adding2num(5,5);
console.log("Result:", result1);


// Login Message (Conditional)
function form(username = "Guest"){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} logged in.`
}
console.log(form());
console.log(form("Manan"))


// Default Parameter (Bonus)
function form(username = "Guest"){
    return `${username} logged in.`
}
console.log(form());
console.log(form("Manan"))


// ... -> spread/rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(3,5,1));

function calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(300,500,100));


const user = {
    username: "Manan",
    price: 999
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


const mynewarray = [100,200,300];
function returnsecondvalue (getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray))