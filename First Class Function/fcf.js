//A programming language is said to support first class functions if its functions can be treated as any other variable

// 1. They can be passed as a value to a function
// 2. They can be returned from another function
// 3. They can be assigned to a variable

//assigning to a variable
const myfunc = function(){
    console.log("Hello World");
}


//passing as an argument to another function 
function average(res){
    let result = res(1,2);
    let average = result/2;

    console.log(average);
}

function sum(a,b){
    return a+b;
}

average(sum); 

//returning one function from another 

function helloWorld(){

     function greetMessage(){
        return "Hello WOrld";
    }

    return greetMessage;
}

console.log(helloWorld()()); 