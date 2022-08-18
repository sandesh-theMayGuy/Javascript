const fetchBtn = document.getElementById("fetch");
const backupBtn = document.getElementById("backup");


fetchBtn.addEventListener("click",buttonClickHandler);


function buttonClickHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("POST","hello.json",true);

    xhr.onprogress = ()=> console.log("On progress");

    xhr.onload = ()=> console.log(xhr.responseText);

    xhr.send(); 
}