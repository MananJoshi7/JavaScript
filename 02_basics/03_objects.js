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



// Test
// Basic Object Operations
const user = {
    id:"1001",
    username:"js_developer",
    isActive: true
}
user.lastlogin = "19-06-2025";
console.log(user);
console.log(user.propertyIsEnumerable('username'));
Object.freeze(user);
user.isActive = false;
console.log(user);


// Problem 2: Object Prototype Methods
const product = {
  name: "Laptop",
  price: 99999,
  quantity: 5,
  toString() {
    return `${this.name} - ₹${this.price.toLocaleString('en-IN')} ${this.quantity} avaiable`  
    }
};
console.log(product.toString());

// Task 2.1: Implement toString() to show "Laptop - ₹99,999 (5 available)"
// Task 2.2: Format price using toLocaleString('en-IN')
// Task 2.3: Check if constructor is Object

const book = {
  title: "JavaScript Essentials",
  author: "Jane Doe",
  price: 899,
  toString() {
        return `"Book: ${this.title} by ${this.author} (₹${this.price})"`
  }
  // Add a toString() method that returns:
  // "Book: JavaScript Essentials by Jane Doe (₹899)"
};
console.log(book.toString());

const smartphone = {
  brand: "Samsung",
  model: "Galaxy S23",
  price: 79900,
  toString() {
    return `"${this.brand} ${this.model} - ₹${this.price.toLocaleString('en-In')}"`
  }
  // Add a method that returns:
  // "Samsung Galaxy S23 - ₹79,900"
};
console.log(smartphone.toString());



// Problem 3: Nested Objects and Merging
const userDetails = {
  contact: {
    email: "user@example.com",
    phones: {
      mobile: "1234567890",
      home: "0987654321"
    }
  }
};

const preferences = {
  theme: "dark",
  notifications: true
};
console.log(userDetails.contact.phones.mobile);
const merge = {...userDetails, ...preferences};
console.log(merge);
console.log(Object.keys(merge));
// Task 3.1: Access mobile phone number using optional chaining
// Task 3.2: Merge userDetails and preferences (preserve nested structure)
// Task 3.3: List all top-level keys of the merged object


const course = {
  course: "js in hindi",
  price: 999,
  courseInstructor: "ram"
}
// console.log(course.courseInstructor);
const {courseInstructor:abc} = course;
console.log(abc);
