// let myName = "Manan   ";
// let nativePlace = "Junagadh   "
// console.log(myName.trueLength);

let heros = ["thor", "spiderman"];
let heroPowers = {
    thor: "hammer",
    spiderman: "sling",
    getSipderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.manan = function(){
    console.log(`Manan is present in all objects`)
}
Array.prototype.heymanan = function(){
    console.log(`Manan says hello`);
}
// heroPowers.manan()
heros.manan()
heros.heymanan()
// heroPowers.heymanan() // Beacuse it is an object


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    _proto__: TeachingSupport
}
Teacher._proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName  = "JayShreeRam        ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}
anotherUserName.trueLength()
"Manan".trueLength()
"IceTea".trueLength()