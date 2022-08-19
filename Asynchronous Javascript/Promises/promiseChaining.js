//If we return something from then, it is returned as a Promise

function myPromise (){
    return new Promise((resolve,reject)=>
    {
        if(true){
            resolve("Resolved");
        }
        else{
            reject("Rejected");
        }
    })
}

//Promise chain:

myPromise()
.then((result)=>
    {
    console.log(result);        //"Resolved"
    result+= "promise";
    return result;
    })
.then(result=>{
    console.log(result);        //"Resolvedpromise"
    result+="resolved"
    return result;
    })
.then(result=>{
    console.log(result);        //"Resolvedpromiseresolved"
})