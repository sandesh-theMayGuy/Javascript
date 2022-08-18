//don't use arrow function as object's method

let myobj = {
    firstName : "Sandesh",
    age : 20,
    isProgrammer : true,
    
    greetMsg : function(){
        console.log("Hello I am",this.firstName);
    }
}


console.log(myobj.firstName, myobj.age, myobj.isProgrammer); 

myobj.greetMsg(); 