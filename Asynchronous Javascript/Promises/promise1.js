//Promise is asynchronous in nature
function helloWorld(){
    //function passed inside Promise is called executor function
    // executor function takes two callback functions as arguments : resolve and reject
    return new Promise((resolve,reject)=>{
        let error = true;

        if(!error){
            resolve("Task completed succesfully....");
        }
        else{
            reject("Error....Task was not completed...");
        }

        //We can return any value(integer,string,object,array etc) with resolve and reject functions
    })
}

//consuming promise

// Method 1
// helloWorld().then((response)=>console.log(response) , (error)=>console.log(error));

// We can skip resolve option 
// helloWorld().then(null,(err)=>console.log(err));

// Method 2

console.log("Before consuming promise");

//Note: priority of promise is higher than timer , callbacks
//Promises are stored in microtask/job queue and timers/callbacks are stored in callback queue
setTimeout(()=>console.log("I am set timeout..."),1000);
helloWorld().then((response)=>console.log(response)).catch((err)=>console.log(err));  

console.log("After consuming promise");  //This line will be executed prior to the execution of line 33

