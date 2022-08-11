//filter also has similar signature as forEach and map
// it filters out the array content for the provided condition, returns true if condition is satisfied ( can then be assigned to a different variable)

const people = [
    {
        name : "Sandesh",
        age : 20
    },
    {
        name : "Raj",
        age : 16
    },
    {
        name : "Bijaya",
        age : 20
    }
];

const canVote = people.filter((value,index,array)=>{
    if(value.age>18) return true;
    else return false;
})

console.log(canVote); 

