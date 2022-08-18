class Student{
    constructor(name,faculty,sem){
        this.name = name;
        this.faculty = faculty;
        this.sem = sem;
    } 

    greetMsg(){
        console.log("Hello I am ",this.name,"from sem",this.sem,"and faculty",this.faculty);
    }
}

let student1 = new Student("Sandesh","S&T",4);
let student2 = new Student("Hari","Mgmt",2);


student1.greetMsg();
student2.greetMsg();

console.log(student1.name,student2.name);

