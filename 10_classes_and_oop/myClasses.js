// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const ram = new User("Krishna", "krishna@gmail.com","123");
console.log(ram.encryptPassword());
console.log(ram.changeUserName());

// behind the scene

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUserName = function(){
    return `${thi.username.toUpperCase()}`
}

const arjun = new User("Govind", "govind@gmail.com", "321")
console.log(arjun.encryptPassword());
console.log(arjun.changeUserName());
