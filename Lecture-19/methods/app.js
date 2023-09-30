// let person ={
//     //property
//     name:'samarth bhaiya',
//     city:'peetampura',

//     //methods -> functions
//     describe:function describe(){
//         console.log('hi my name is samarth')
//     }
// }

// console.log(person.describe) //will return the whole function
// console.log(person.describe()) //calling the function


// let person ={
//     //property
//     name:'samarth bhaiya',
//     city:'peetampura',

//     //methods -> functions
//     description:function describe(){
//         console.log('hi my name is samarth')
//     }
// }
// console.log(person.description()) //right way
// // console.log(person.describe()) //wrong way
// // describe() //wrong way

// let person ={
//     //property
//     name:'samarth bhaiya',
//     city:'peetampura',

//     //methods -> functions
//     description:function (){
//         console.log(`hi my name is  ${person.name}`)
//         console.log(`my name is ${this.name}`)
//     }
// }
// console.log(person.description())

let person ={
    //property
    name:'samarth bhaiya',
    city:'peetampura',

    //methods -> functions
    description:function describe(){
        console.log('hi my name is samarth')
        // return 0 
        // return person
    }
}

let ans = person.description() // by default undefined is returend by js
console.log(ans)