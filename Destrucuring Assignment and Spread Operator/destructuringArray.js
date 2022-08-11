const date = [2022,8,11];

const [year,month,day] = date;

console.log(year,month,day);

//setting default value

const [saal, mahina, gatey, tithi='tritiya'] = date;

console.log(saal,mahina,gatey,tithi);

//skipping values

const [y,,d] = date;  //2nd index will be skipped

console.log(y,d);

