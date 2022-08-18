

function helloWorld(){
    return new Promise((resolve,reject)=>{
        let error = true;

        if(!error){
            resolve("Task completed succesfully....");
        }
        else{
            reject("Error....Task was not completed...");
        }
    })
}

helloWorld().then((response)=>console.log(response)).catch((err)=>console.log(err));  