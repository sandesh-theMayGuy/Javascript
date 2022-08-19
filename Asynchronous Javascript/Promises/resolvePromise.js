//Promise.resolve() takes a value and returns a Promise

const myPromise = Promise.resolve(5);    

console.log(myPromise);   //Promise

myPromise.then(res=>console.log(res));  //5

myPromise.catch(err=>console.log(err));

