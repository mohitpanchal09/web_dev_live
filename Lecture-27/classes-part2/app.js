// class Person{
//     constructor(name,umar){
//         this.username=name;
//         this.age=umar
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `my name is ${this.username}`
//     }
// }
// let person1= new Person('samarth',24)
// console.log(person1)
// console.log(person1.printName())
// console.log(person1.getName())


// ----------------------not good way but correctt---------------------------
// class Person{
//     constructor(name,umar){
//         this.username=name;
//         this.age=umar
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `my name is ${this.username}`
//     }
// }
// class student{
//     constructor(name,umar){
//         this.username=name;
//         this.age=umar
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `my name is ${this.username}`
//     }
// }
// let person2= new Person('samarth',24)
// console.log(person2)


// ----------------------good way-----------------------------
class Person{
    constructor(name,umar){
        this.username=name;
        this.age=umar
    }
    printName(){
        console.log(`my name is ${this.username}`)
    }
    getName(){
        return `my name is ${this.username}`
    }
}

class Student extends Person{
    constructor(naam,umar,rollNo){
        super(naam,umar) //used to get items from parent
        this.rollNumber=rollNo
    }
    printName(){
        console.log(`kaa hua ${this.username}`)
    }
}
let person3= new Student('anshika',22,76)
console.log(person3)
console.log(person3.printName())
