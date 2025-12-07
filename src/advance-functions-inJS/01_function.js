
// Basic Example of Function in JavaScript
function sayMyName(){
console.log("u");
console.log("m");
console.log("a");
console.log("n");
console.log("g");

}
sayMyName();

// Function with Parameters

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(5, 7);
addTwoNumbers(50, 10);
addTwoNumbers(90, 45);
addTwoNumbers(90, "4");

function addTwostrings(str1, str2){
    let result = str1 + str2;
    return result;
}
const result = addTwostrings("Umang", "Thakor");
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
    console.log(loginUserMessage("UmangThakor"));
    // console.log(loginUserMessage());





