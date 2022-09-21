//fetch(web api) is a function that returns a promise 
// It makes GET request by default

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then(response =>{
    if(response.status>=200 && response.status<=299)
        {
             return (response.json())
        } 
    else
    {
        console.error("Error")}
    })
    .then(data => { console.log(data) }) 