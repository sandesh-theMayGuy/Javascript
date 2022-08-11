function add(...para){   //para is an array of parameters
    let sum = 0;
    for(value of para){
        sum = sum + Number(value);
    }

    return sum;
}


console.log(add(1,2));

console.log(add(1,2,3));



