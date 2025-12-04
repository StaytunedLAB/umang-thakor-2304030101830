// 1. Map Methods in JavaScript

let user = new Map();

//  set() – Add key-value pair
user.set("name", "Umang");
user.set("age", 21);

console.log(user);
// Map { 'name' => 'Umang', 'age' => 21 }

// get() – Get value
console.log(user.get("name")); // Umang

//  delete() – Remove key
user.delete("age");
console.log(user); // Map { 'name' => 'Umang' }

// clear() – Remove all entries
user.clear();
console.log(user); // Map {}

//  keys(), values(), entries() – Iteration
let data = new Map([
  ["id", 101],
  ["role", "admin"]
]);

console.log([...data.keys()]);    // ["id", "role"]
console.log([...data.values()]);  // [101, "admin"]
console.log([...data.entries()]); // [["id",101],["role","admin"]]


//  2. Set Methods in JavaScript

let numbers = new Set();

//  add() – Add a value
numbers.add(10);
numbers.add(20);
numbers.add(20); // duplicate ignored

console.log(numbers); 
// Set { 10, 20 }

//  values(), keys(), entries()
let items = new Set(["a", "b"]);

console.log([...items.keys()]);    // ["a", "b"]
console.log([...items.values()]);  // ["a", "b"]
console.log([...items.entries()]); // [["a","a"], ["b","b"]]

//  forEach() – Loop
items.forEach(value => {
  console.log(value);
});
