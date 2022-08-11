//A higher order function is a function that either
// 1. takes another function as an argument
// 2. returns another function
// or both



const doCube = (value) =>value*value*value;
const doSquare = (value) => value*value;

function calculate(arr, fxn){
    for(i of arr){
        console.log(fxn(i));
    }
}


calculate([1,2,3] , doCube); 

calculate([1,2,3] , doSquare);