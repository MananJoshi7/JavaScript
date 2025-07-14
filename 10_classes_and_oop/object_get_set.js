const User = {
    _email: "manan@gmail.com",
    _password: "mnbvcxz",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

console.log(User.email)
console.log(User.password)