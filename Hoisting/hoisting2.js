console.log(add(2,3));    //5

// console.log(addExp(2,3)); // reference error

console.log(addArr(2,3));  //reference error

// console.log(addExp); //undefined
// console.log(addArr); //undefined


function add(a,b){
    return a+b;
}

var addExp = function (a,b) {return a+b;}

const addArr = (a,b) => {a+b} 
