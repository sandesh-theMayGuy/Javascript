console.log(myName);
console.log(myJob);
console.log(birthYear);


var myName = "Sandesh";
let myJob = "Programmer";
const birthYear = 2002;



// Notes:

// var variables are hoisted to undefined
// let and const variables are not hoisted (technically yes due to the fact that JS engine puts all the variable declaration in the variable environment of the execution context before the actual execution of code happens ), but they are uninitialized in the TDZ
// In the above code, we are trying to acces myJob and birthYear in the temporal dead zone

//var variables are added as property to the global window object but this does not happen with let and const