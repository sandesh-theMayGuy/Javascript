//single quotation is not valid in JSON (double quotation and backticks are valid)
myjson = `{ 
    "name" : "Sandesh",
    "age" : 20,
    "isProgrammer" : true,
    "isMarried" : false,
    "languages": {
        "primary" : "Nepali",
        "secondary" : "English"
    },
    "programmingLanguages":
    {
        "proficient At" : "Javascript",
        "familiarWith" : ["C" , "C++" , "Python"]
    },
    "greetMsg" : "Hello there"
  
}`

let parsedjson = JSON.parse(myjson);


console.log(parsedjson.languages.primary);

console.log(parsedjson.programmingLanguages["proficient At"]);




