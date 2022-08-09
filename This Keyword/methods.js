// this keyword is one among three components of an execution context 

// this is a special variable that is created for every execution context (function)

// this is not Static...its value depends on how the function is called and its value is determined only after function is called 

// this keyword points to the owner of the function/method inside of which it is used


const myDetails = {
    name : "Sandesh",
    age : 20,
    isProgrammer : true,

    printDetails(){
        console.log(`Hello I am ${this.name} , I am ${this.age} years old and it is ${this.isProgrammer} that I am a programmer`);
    }
} 

myDetails.printDetails();  


