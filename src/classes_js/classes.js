class user {
    constructor(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;

    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }

}
const user1 = new user ("Umang", "umang89@gmail.com", "umang123");
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

// Another example of class.


class Users {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Usage:
let users = new Users("rohan patel");
users.sayHi();