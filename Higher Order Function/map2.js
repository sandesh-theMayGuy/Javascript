const student = [
    {
        name : "Sandesh",
        faculty : "BE"
    },
    {
        name : "Bibash",
        faculty : "BBA"
    }
];

student.map((value,index,array)=> console.log(value)); 

student.map((value)=>console.log(` Hello I am ${value.name} I belong to ${value.faculty} faculty`)); 

