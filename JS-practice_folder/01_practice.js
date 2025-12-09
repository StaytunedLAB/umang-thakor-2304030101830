// QUESTION-1 SIMPLE INTEREST AND COMPOUD INTEREST CALCULATOR in js


function calculateSimpleInterest(P, R, T) {
    return (P * R * T) / 100;
}
function calculateCompoundInterest(P, R, T) {
    return P * Math.pow((1 + R / 100), T) - P;
}

const P = 8000; // Principal amount
const R = 6; // Interest rate
const T =3; // Time in years        
const simpleInterest = calculateSimpleInterest(P, R, T);
const compoundInterest = calculateCompoundInterest(P, R, T);
console.log("Simple Interest:>>", simpleInterest);
console.log("Compound Interest:>>", compoundInterest);

// QUESTION - 2 FIBONACCCI SERIES IN JS

function generateFibonacciSeries(n) {
    const fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, n);
}       
const n = 15; // Number of terms
const fibonacciSeries = generateFibonacciSeries(n);
console.log("Fibonacci Series:>>", fibonacciSeries);

// QUESTION-3 CREATE A GRADE CALCULATOR USING SWITCH CASE

let marks = 85;
let GRADE;

switch (true) {
    case (marks >= 90):
        GRADE = "A";
        break;
    case (marks >= 80):
        GRADE = "B";
        break;
    case (marks >= 70):
        GRADE = "C";
        break;
    case (marks >= 60):
        GRADE = "D";
        break;
    case (marks >= 50):
        GRADE = "E";
        break;
    default:
        GRADE = "F";
}

console.log("Your Grade is: " + GRADE);

// QUESTION - 4 CHECK LEAP YEAR.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a Leap Year";
    } else {
        return year + " is NOT a Leap Year";
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
console.log(isLeapYear(2023));

// QUESTION - 5 CHECK PALINDROME STRING 

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    
    if (str === reversed) {
        return str + " is a Palindrome";
    } else {
        return str + " is NOT a Palindrome";
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));













