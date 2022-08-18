
function xhr(){
    return (new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.open("GET","hello.json");

        request.onload = ()=> {
            if(request.status>=200 && request.status<=299){
                resolve(request.response);
            }
            else{
                reject("ERROR...");
            }
        }

        request.onerror = ()=>{
            console.log("Network error");
        }
        request.send();
    }))
}

xhr().then(response =>{return (JSON.parse(response))}).then(data=>{console.log(data.name)});

