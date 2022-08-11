//map has almost same signature as forEach.... 
// the difference is that it can return values (array)
// We can modify array items and return it with map method

const places = ["Ilam" , "Birtamod" , "Pokhara" , "Butwal"];

places.map((value,index,array)=>console.log(value));

const myPlaces = places.map((value)=>`<li>value</li>`);    //returns values as li

console.log(myPlaces);   

