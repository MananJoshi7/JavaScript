class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Manan`
    }
    set password(value){
        this._password = value
    }
}
const manan = new User("manan@gmail.com", "abc")
console.log(manan.password)
console.log(manan.email)