// function user(){

// }
// let user1=user()
// console.log(user1) //undefined

// ---------------------------------------

// constructor function =>returns an object
// function user(){

// }
// let user1 = new user()
// console.log(user1)
// -------------------------------------

// construction function
// covention=>1st letter capital

// function User(){

// }
// let user2= new User();
// console.log(user2)

// ----------------------------------
// function  User(){
//     this.username='bhumika';
//     this.age=21;
//     this.color='white'
// }
// let user3= new User();
// console.log(user3) //prints an object
// ----------------------------------
// constructior function
function  User(naame,age,rang){
    this.username=naame;
    this.age=age;
    this.color=rang
    // this.desc=function(){
    //     return `my name is ${this.username}`
    // }
}
User.prototype.description=function(){
    return `my name is ${this.username}`
}
let user3= new User('smarth',29,'black');
let user4= new User('mohit',22,'black');

console.log(user3) //prints an object
console.log(user4)
console.log(user3.description())

