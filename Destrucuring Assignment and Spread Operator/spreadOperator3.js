const person = {
    name : "Sandesh",
    age : 20,
    gender : "Male"
};

const myDetails = {...person , isProgrammer : "true" , maritalStatus : "single" , name:"Bikash"};  //name will be overridden

console.log(myDetails); 
 
