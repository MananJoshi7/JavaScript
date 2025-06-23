const user = {
    username: "Manan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
console.log(user);
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()



function chai(){
    let username = "RAM";
}
chai()


const chai1 = function(){
    let username = "Shivaji";
}
chai1()


// Arrow Function
const chai2 = () => {
    let username = "Jay Bhavani";
    return username;
}
console.log(chai2());


const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 4));


function addthree(num1, num2, num3){
    return num1 + num2 + num3
}
console.log(addthree(1,3,5));

// If you are using the return then it is explicit
// If you are not using the return and using the => () then it is implicit 


// These is implicit
const addfour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)
console.log(addfour(1, 2, 3, 3));