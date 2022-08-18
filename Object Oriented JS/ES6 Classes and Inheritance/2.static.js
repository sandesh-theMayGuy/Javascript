class Student{
    constructor(name,age,roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    
  
    static hello(){
        console.log("Hello there");
    }

}


//We don't need objects to call static methods
Student.hello();





