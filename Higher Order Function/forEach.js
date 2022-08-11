//forEach is a built-in higher order function for array
//forEach returns undefined

const places = ["Ilam" , "Birtamod" , "Pokhara" , "Butwal"];


places.forEach(function (value, index, array){
    console.log(index , value);                        
});

//arrow function in forEach method

places.forEach((value)=>console.log(value)
);

