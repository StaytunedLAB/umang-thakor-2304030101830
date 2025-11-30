// 1. Arithmetic Operators (Maths Operators)
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Remainder:", a % b);       // 1
console.log("Power:", a ** b);          // 1000 (10³)

// 2. Assignment Operators

let x = 5;

x += 3;    // x = x + 3 → 8
x -= 2;    // x = x - 2 → 6
x *= 4;    // x = x * 4 → 24
x /= 3;    // x = x / 3 → 8
x %= 5;    // x = x % 5 → 3

console.log("Final value:", x);
// 3. Comparison Operators

let p = 10;
let q = "10";

console.log(p == q);   // true  (checks value only)
console.log(p === q);  // false (checks value + type)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p <= 10);  // true
// 4. Logical Operators


let age = 18;

console.log(age >= 18 && age <= 60);   // true (AND)
console.log(age < 18 || age > 60);     // false (OR)
console.log(!(age === 18));            // false (NOT)
