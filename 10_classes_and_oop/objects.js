// Everything in the javascript is an object
// Array    ->  Object  -> null
// String   ->  Object  -> null
// Function ->  Object  -> null

function multipleOf5 (num) {
    return num*5
}
multipleOf5.power = 9
// console.log(multipleOf5(5));
// console.log(multipleOf5.power);
// console.log(multipleOf5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}
const chai = new createUser("chai", 25)
chai.printMe()