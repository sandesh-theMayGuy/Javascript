const employee = [
    {
        name : "Bishwo",
        position: "Frontend Developer",
        age : 24
    },
    {
        name : "Bibash",
        position: "Frontend Developer",
        age : 20
    },
    {
        name : "Sandesh",
        position: "Backend Developer",
        age : 24
    }
];

const FED = employee.filter((value)=>value.age>=20 && value.position==="Frontend Developer");

for(index in FED) console.log(FED[index].name , "is a" , FED[index].position , "aged" , FED[index].age);
