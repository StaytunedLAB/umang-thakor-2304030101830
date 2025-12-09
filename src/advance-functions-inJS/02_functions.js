// example js rest operator
// ... called rest operator

function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,900,200))
console.log(CalculateCartPrice(500,300,120))

// example of Object in js fynction

const user = {
    username: "umang",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user);
// example of aray in js function

const myNewArray = [200,400,600,100]
function returnSecondValue(getarray){
    return getarray[2];
}
console.log(returnSecondValue(myNewArray));


// recursion with call stack
function countdown(n) {
    console.log("Entering:", n);

    if (n === 0) {
        console.log("Base case reached");
        return;
    }

    countdown(n - 1);

    console.log("Exiting:", n);
}

countdown(3);

//  basic arrow function in js
const getUser = () => ({
    name: "Umang",
    age: 22
});

console.log(getUser());

