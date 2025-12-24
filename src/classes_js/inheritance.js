class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}


class Admin extends User {
    constructor(username,admincode){
        super(username);
        this.admincode = admincode;
    }

    logMe(){
        console.log(`ADMIN USERNAME IS ${this.username} AND ADMIN CODE IS ${this.admincode}`);
    }

}

const admin1 = new Admin ("umangthakor", "ADM1234");
admin1.logMe();
const user3 = new User ("rohanpatel");
user3.logMe();
console.log(admin1 instanceof Admin);
