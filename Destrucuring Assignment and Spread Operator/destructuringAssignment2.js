const person = {
    name : {
        first: "Sandesh",
        last : "Khatiwada"
    },
    
    age : 20,
    gender : "Male"
};



const {name:{first}} = person;
const {name:{last}} = person;

console.log(first);
console.log(last);


//setting default values

const {name:{middle = "Prashad"}} = person;

console.log(middle);



