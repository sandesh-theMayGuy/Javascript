// const myDetails = {
//     firstName : "Sandesh",
//     lastName : "Khatiwada",
//     age : 20,

//     greetMe: function(){
//         console.log(`Hello I am ${this.firstName} ${this.lastName}`);

//         const isAdult = function(){
//             console.log(` I am an adult and my age is ${this.age} `);
//         }
//         isAdult();
//     }

// }

// myDetails.greetMe(); //age will be undefined because normal functions this value is undefined

// // Solution 1:   We can make isAdult as an arrow function that will get this value of its parent

// const myDetails = {
//     firstName : "Sandesh",
//     lastName : "Khatiwada",
//     age : 20,

//     greetMe: function(){
//         console.log(`Hello I am ${this.firstName} ${this.lastName}`);

//         const isAdult = ()=>{
//             console.log(` I am an adult and my age is ${this.age} `);
//         }
//         isAdult();
//     }

// }

// myDetails.greetMe(); 


//Solution 2 : found in older code base 
//We can create a variable in the parent scope of the normal function and set its value to this
// It will set the value of self as this of the parent of normal function (this will give object itself)

const myDetails = {
    firstName : "Sandesh",
    lastName : "Khatiwada",
    age : 20,

    greetMe: function(){
        console.log(`Hello I am ${this.firstName} ${this.lastName}`);
        const self = this;

        const isAdult = function(){
            console.log(` I am an adult and my age is ${self.age} `);
        }
        isAdult();
    }

}

myDetails.greetMe(); 