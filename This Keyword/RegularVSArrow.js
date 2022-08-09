var firstName = "Binod";
var lastName = "Chaudhary";

const myDetails={
    firstName : "Sandesh",
    lastName : "Khatiwada",

    greetRegular: function(){
        console.log(`Hello I am ${this.firstName} ${this.lastName}`);
    },

    greetArrow : ()=>{
        console.log(`Hello I am ${this.firstName} ${this.lastName}`);
    }
};

myDetails.greetRegular();

myDetails.greetArrow();     //this will give undefined in NodeJS environment but will give Binod Chaudhary in browser because var variables are added as property to the global window object

// console.log(window);  //this will generate an error in nodeJs environment as window is an object in browser only

//Notes:
//In case of arrow fuction, this keyword gets the value of its parents this i.e arrow function does
//not have this keyword of its own.
//In the above example, the parent of the arrow function greetArrow() is a global scope whose this is
//window object and window object does not have property of firstName and lastName , so we get undefined


//{} in object does not mean scope, it is just an object literal

