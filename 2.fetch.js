const URL = "https://jsonplaceholder.typicode.com/posts";


fetch(URL,{
    method:"POST",
    body:JSON.stringify({
        "name":"Sandesh",
        "age" : 20
    }),
    headers:{
        "Content-type":"application /json; charset = UTF-8"
    }
})

