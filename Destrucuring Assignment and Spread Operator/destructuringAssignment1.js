const myDetails = {
    name : "Sandesh",
    age : 18,
    isProgrammer : true
}

const {name} = myDetails;


const {age , isProgrammer , message="Hello"} = myDetails;   //Hello is a default value assigned to message if message does not exist as a key in myDetails


console.log(name,age,isProgrammer,message);


const {name:myName} = myDetails;  //giving alias -> value of name key will be assigned to myName

console.log(myName);


