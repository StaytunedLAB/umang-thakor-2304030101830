// Object literals


 const mySym = Symbol("key1")

const Jsuser = {
    name:"umang",
    [mySym]: ("key1"),
    age:20,
    location:"ahmedabad",
    email:"umangthakor123@google.com",
    IsLoggedIn:true,
    lastLoginDays:["monday","saturday"]
}

console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);
console.log(Jsuser["age"]);
console.log(Jsuser["name"]);


Jsuser.email = "umang@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.name = "umang"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello jsuser");
}
Jsuser.greetingTwo = function(){
    console.log(`hello jsuser,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());