//  1. JSON.stringify()

let user = {
  name: "Umang",
  age: 21,
  isAdmin: true
};

let jsonStr = JSON.stringify(user);
console.log(jsonStr);
// {"name":"Umang","age":21,"isAdmin":true}

//  2. JSON.parse()

let jsonData = '{"name":"Umang","age":21}';

let obj = JSON.parse(jsonData);
console.log(obj.name); // Umang
console.log(obj.age);  // 21

//  JSON.stringify() with function replacer
let users = { name: "Raj", age: 20 };

let result = JSON.stringify(users, (key, value) => {
  if (key === "age") return value + 1; 
  return value;
});

console.log(result); 
// {"name":"Raj","age":21}

//  Convert array to JSON
let arr = [10, 20, 30];

let json = JSON.stringify(arr);
console.log(json);  // "[10,20,30]"

//  JSON.parse() with reviver function
let jsonn = '{"name":"Karan","age":20}';

let results = JSON.parse(jsonn, (key, value) => {
  if (key === "age") return value + 5;
  return value;
});

console.log(results);
// { name: 'Karan', age: 25 }
