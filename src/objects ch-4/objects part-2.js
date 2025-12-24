// const { use } = require("react");



const tinderUser = new Object()
console.log(tinderUser);

tinderUser.name = "umang"
tinderUser.age = 20
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"umang",
            lastname:"thakor"
        }


}
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj4 = {5: "a",6:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"some123@.com"
    },
    {
        id:2,
        email:"some456@.com"
    }
]
 users[1].email 
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

