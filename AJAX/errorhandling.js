const fetchBtn = document.getElementById("fetch");
const backupBtn = document.getElementById("backup");

const URL = "http://jsonplaceholder.typicode.com/posts";


fetchBtn.addEventListener("click",buttonClickHandler);


function buttonClickHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET" , URL);

    xhr.onload = ()=>{

        if(xhr.status<200 && xhr.status >=300) console.log("Error...");

       else{
       const response =  JSON.parse(xhr.response);

       console.log(response);
       console.log(response[0].title);

        }

    }

    //For network related errors

    xhr.onerror = ()=> console.log("Network error");

    xhr.send();
}



//status 200-299 (Succesfull)
// readyState 4 (some data received) 