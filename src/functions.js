// 1. Basic Function (Print a message)
function greet() {
  console.log("Hello! Welcome to JavaScript functions.");
}

greet();

// 2. Function with Parameters (Add two numbers)
function add(a, b) {
  console.log("Sum:", a + b);
}

add(5, 10);
// 3. Function that Returns a Value
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 6);
console.log("Multiplication:", result);
// 4. Function to Check Even or Odd

function checkNumber(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

checkNumber(7);
// 5. Arrow Function (Short Function)
const welcome = () => {
  console.log("This is an arrow function!");
};

welcome();



