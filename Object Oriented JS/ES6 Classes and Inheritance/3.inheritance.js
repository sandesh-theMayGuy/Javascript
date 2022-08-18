class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetMe(){console.log("Hello I am",this.name,"aged",this.age)}
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks;
    }

    displayMarks(){console.log("My marks is",this.marks)}

    static add(a,b) {return a+b}
}

let student1 = new Student("Sandesh",20,90);

student1.greetMe();
student1.displayMarks();

console.log(Student.add(1,2));