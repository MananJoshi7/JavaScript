function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {  
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {  
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new User("Manan@gmail.com", "qwerty")
console.log(chai.email)     // ✅ Output: MANAN@GMAIL.COM
console.log(chai.password)  // ✅ Output: QWERTY
