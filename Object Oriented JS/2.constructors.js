
function student(first,last,sem){
    this.firstname = first;
    this.lastname = last;
    this.sem = sem;
    this.greetMsg=function(){console.log("Hello I am" , this.firstname , this.lastname , "from sem" , this.sem)}
}

let student1 = new student("Bibek","Dahal",2);


console.log(student1.firstname);
student1.greetMsg();
