const fetchBtn = document.getElementById("fetch");
const backupBtn = document.getElementById("backup");


fetchBtn.addEventListener("click",buttonClickHandler);


function buttonClickHandler(){

    console.log("Clicked");

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','hello.json',true);


    // what to do on progress
    xhr.onprogress = ()=> console.log("On progress");

    //what to do on load
    xhr.onload = ()=> {
        if(xhr.status === 200)             // 200 is the HTTP response status code for succesful response
            console.log(xhr.responseText);

        else
            console.error("Error occurred");
        
    } 

    //send the request
    xhr.send();
}  