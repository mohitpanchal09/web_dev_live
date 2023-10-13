// functions are heart of js

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,7)

// --------------------------------

// function sum(a,b){
//     console.log(a+b)
// }
// sum('sam',7)
// sum(true,false)

// --------------------------------

// function a(fn){
//     fn() //callback and calling of it is must to be a callback
//     console.log('in a')
// }
// function b(){
//     console.log('in b')
// }

// a(b)
// function a(){ //HOF
//     function b(){  
//         console.log('inside b')
//     }
//     return b; 
// }
// let temp = a()
// console.log(temp) // f b(){}
// temp() //inside b


// higher order function =>'a'
// 1. when you pass the entire functn as an arguement in some other functn then it is called HOF
// 2. when you return an entire function from another function then the other function is you HOF.

// ------------use case-----------------------




// function getString(arr){
//     let brr =[]
//     for(let i of arr){
//         if(typeof(i)=='string'){
//             brr.push(i)
//         }
//     }
//     console.log(brr)
// }
// function getNumber(arr){
//     let brr =[]
//     for(let i of arr){
//         if(typeof(i)=='number'){
//             brr.push(i)
//         }
//     }
//     console.log(brr)
// }
// function getBoolean(arr){
//     let brr =[]
//     for(let i of arr){
//         if(typeof(i)=='boolean'){
//             brr.push(i)
//         }
//     }
//     console.log(brr)
// }

// function calculate(arr,logic){
//     ans=logic(arr)
//     return ans
    
// }
// let arr=['sam',100,'bhaukal',true,400,false ]
// calculate(arr,getBoolean)

// -------------using hof-------------------

function getNumber(item){
    return typeof(item)==='number'
}
function getBoolean(item){
    return typeof(item)==='boolean'
}
function getString(item){
    return typeof(item)==='string'
}

function get(arr, fn){
    let res =[]
    for (let item of arr){
        if(fn(item)){
            res.push(item)
        }
    }
    return res
}
let arr=['sam',100,'bhaukal',true,400,false ]

console.log(get(arr,getNumber))
console.log(get(arr,getBoolean))
console.log(get(arr,getString))

