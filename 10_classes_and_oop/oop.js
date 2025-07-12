// const user = {
//     // username: "Manan",
//     // loginCount: 9,
//     signedIn: true,
//     getUserDeatils: function(){
//         // console.log("Got user deatails from the database");
//         // console.log(`This is username ${this.username}`);
//         // console.log(this)
//     }
// }
// // console.log(user.username)
// // console.log(user.getUserDeatils())

function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn
    return this
}
const userOne = new User("Ram", 9, false);   
const userTwo = new User("Krishna", 11, true)
console.log(userOne.constructor);
// console.log(userThree);


// 📌 Note on new Keyword in JavaScript
// When we use the new keyword in JavaScript:

// 🧱 A new empty object is created.
// This object is called an instance.

// 🛠️ The constructor function is called automatically.
// This function sets up (initializes) the properties of the new object using this.

// 🔗 The new object is linked to the constructor’s prototype.
// This means the object can access methods defined in the prototype.

// 📦 Finally, the new object is returned automatically from the constructor.