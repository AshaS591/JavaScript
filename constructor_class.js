//contructor is used to initialise the properties for an  object

// creation of object using class

class student{
    constructor(id,name,stream,yop){
        this.id=id
        this.name=name
        this.stream=stream
        this.yop=yop
    }
}
let stut1=new student(787,'Asha','cse',2024)
console.log(stut1);
let stut2=new student(789,'usha','ise',2022)
console.log(stut2);
console.log(stut2.stream);

//creation of object using constructor function
function student1(id,name,stream,yop) {
    this.id=id
    this.name=name
    this.stream=stream
    this.yop=yop
    
}
let stud=new student1('20201cse0787','Asha S','CSE',2024);
console.log(stud);
stud.name='ASHA S'
console.log(stud);
console.log(stud.yop);
