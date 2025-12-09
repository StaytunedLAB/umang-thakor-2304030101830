//  1. push() – Add element at end

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

//  2. pop() – Remove element from end

let arrr = [1, 2, 3];
arr.pop();
console.log(arrr); // [1, 2]

//  3. shift() – Remove first element

let arR = [1, 2, 3];
arr.shift();
console.log(arR); // [2, 3]

//  4. unshift() – Add element at beginning

let aRR = [1, 2, 3];
arr.unshift(0);
console.log(aRR); // [0, 1, 2, 3]

//  5. indexOf() – Find index of element

let array = [10, 20, 30, 40];
console.log(array.indexOf(30)); // 2

//  6. includes() – Check if element exists

let arraY = [10, 20, 30, 40];
console.log(arraY.includes(25)); // false

//  7. slice() – Extract subarray

let arRay = [10, 20, 30, 40, 50];
console.log(arRay.slice(1, 4)); // [20, 30, 40]

//  8. splice() – Add/Remove elements

let arRray = [10, 20, 30, 40, 50];
arRray.splice(2, 1, 25);

console.log(arRray); // [10, 20, 25, 40, 50]

//  9. forEach() – Iterate over elements

let arrRay = [1, 2, 3];
arrRay.forEach((num) => console.log(num * 2)); // 2, 4, 6

// 10. map() – Transform elements

let arRRay = [1, 2, 3];
let doubled = arRRay.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]


