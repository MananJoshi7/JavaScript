// Object.prototype.constructor
obj5 = {}
console.log(obj5.constructor == Object); // true



// Object.prototype.propertyIsEnumerable
const obj7 = {
    name:"OM",
    price: 123456789
}
console.log(obj7.propertyIsEnumerable('name')); //true


// Object.prototype.toLocalString
console.log(obj7.price.toLocaleString('en-IN')); // 12,34,56,789


// Object.prototype.toString
const person = {
    name:"Alice",
    age: 12,
    toString() {
        return `${this.name}, ${this.age} years`
    }
}
console.log(person.toString()); // Alice, 12 years


// const tinderUser = new Object(); // Singleton Object
const tinderUser = {} // Nob-Singleton Object
tinderUser.id = "123",
tinderUser.name = "Manan",
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123', 'Manan', false ]
console.log(Object.entries(tinderUser));// [ [ 'id', '123' ], [ 'name', 'Manan' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true (Case-Sensitive)


const regularUser = {
    email:"manan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manan",
            lastname: "Joshi"
        }
    }
}
console.log(regularUser);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {4:"e", 5:"f"};
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj4 = {obj1, obj2, obj3}
const obj4 = {...obj1,... obj2,... obj3};
console.log(obj4);