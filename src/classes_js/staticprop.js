class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`USERNAME: ${this.username}`);
    }

     static createId(){
        return `123`
    }
}

const umang = new User ("umangthakor");
// console.log(umang.createId());


class Admin extends User{
    constructor(username, admincode){
        super (username);
        this.admincode = admincode;
    }
}

const admin1 = new Admin ("rohan", "ADM9510");
admin1.logme();
// console.log(admin1.createId());   Error: createId is not a function
console.log(User.createId());    // Correct way to call static method