class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const Ram = new Teacher("Krishna","krishna@gmail.com","ABC");
Ram.logMe()

const masalaChai = new User("Malasa Chai")
masalaChai.logMe()