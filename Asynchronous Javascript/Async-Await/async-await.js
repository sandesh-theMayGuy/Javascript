//async-await is just a syntatically better promises (it uses promises under the hood)

 function myPromise(){
    return new Promise((resolve,reject)=>{
        let error = false;

        if(!error)   resolve("Task done succesfully");
    
        else  reject("Task was unsuccesful...");
    })

}


async function helloWorld(){
       let a = await myPromise();
       console.log(a);

}

