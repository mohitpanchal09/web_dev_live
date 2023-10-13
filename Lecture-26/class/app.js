// constructor function

// function Person(name,age){
//     this.username=name;
//     this.age=age;
    
// }

// Person.prototype.getName=function(){
//     return `i am ${this.username}`
// }
// Person.prototype.printName=function(){
//     console.log(`i am ${this.username}`)
// }
// let person1=new Person('sam',24)
// console.log(person1)

//--------------------class syntax-----------------------

class Person{
    constructor(name,age){
        this.username=name;
        this.age=age;
        
    }
    printName(){
        console.log(`${this.username} is my name`)
    }
    getName(){
        return `my name is ${this.username}`
    }
}

let person2 = new Person('jatin',22)
console.log(person2)
person2.printName() //calling the method of the class