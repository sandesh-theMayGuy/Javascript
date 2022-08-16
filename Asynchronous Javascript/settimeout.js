
function helloWorld(){
    console.log("Hey...");
    setTimeout(function(){
        console.log("hi there");
    } , 2000);
}

console.log("Hello 1");
console.log("Hello 2");
helloWorld(); 
console.log("Hello 3");


//Order of execution:
// Hello1
// Hello 2
// Hey
// Hello 3
// hi there