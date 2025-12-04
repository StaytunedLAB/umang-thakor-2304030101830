

// *Methods of String Primitives*


// length
let names = "JavaScript";
console.log(names.length);  // 10

// toUpperCase()
console.log(names.toUpperCase());  // "JAVASCRIPT"

// toLowerCase()
console.log(names.toLowerCase());  // "javascript"

// slice()
console.log(names.slice(0, 4)); // "Java"

// includes()
console.log(names.includes("Script")); // true

// indexOf()
console.log(names.indexOf("S")); // 4

// replace()
console.log(names.replace("Java", "ECMA")); // "ECMAScript"



// *Methods of Number Primitives*

let num = 123.456;

// toFixed()
console.log(num.toFixed(2)); // "123.46"

// toString()
console.log(num.toString()); // "123.456"

// valueOf()
console.log(num.valueOf()); // 123.456

// Number.isInteger()
console.log(Number.isInteger(num)); // false

// parseInt()
console.log(parseInt("42px")); // 42

// parseFloat()
console.log(parseFloat("42.89px")); // 42.89

// *Boolean Primitives Methods*

let isActive = true;

// toString()
console.log(isActive.toString()); // "true"

// valueOf()
console.log(isActive.valueOf()); // true

