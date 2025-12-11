
// Example 1
let a = prompt("Enter first number:")

let b =prompt("Enter second nnumber:")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This Is Not Allow")    
}


let sum =parseInt (a) +parseInt(b) 



try {
    
console.log("The sum is " + sum)
return true;
} catch (error) {
    console.log("Error aagya bhai");
    return false;
}
finally{
    console.log("files are being closed and db connections are being closed") 
}





// Another example
try{
    
console.log(age);

}catch(err){
    console.log(err.name);//which type of error
    console.log(err.message);//detailed message
}


 const c = 2*4;
 console.log("Important",c);

 // Another example



try{
    const result = prompt("ARE YOU A ROBOT?");
    if(result === "yes"){
        throw new Error("ACCESS DENIED");
            
        
    }

} catch(err){
    console.log(err.name);


}

//another example

setTimeout(() => {
    
console.log("hacking wifi.....please wait....");



    
}, 1000);
try{
console.log(rahul);
}
catch(err){
    console.log(" error aagya bhai");
}

setTimeout(() => {
    console.log("fetching username or password .....please wait....");

    
}, 2000);
setTimeout(() => {
    console.log("hacking rahuls facebook id .....please wait....");

    }, 3000);
setTimeout(() => {
        console.log("username or password of rahul fetched(+919510270000).....please wait....");
    }, 4000);


