function add(a,b){
    return a+b;
}

class Student{
    constructor(name){
        this.name = name;
    }

    getStudentInfo(){
        console.log(`Hello I am ${this.name}`);
    }
}

const myName = "Sandesh"

export {add,Student};  
export default {myName};