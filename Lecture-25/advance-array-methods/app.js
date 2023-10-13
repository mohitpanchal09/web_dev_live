// array
let worldCup=['india','srilanka','afg']

//1. foreach=>array


// worldCup.forEach(function (item){ //item just a regular function
//     console.log(item)
// });

// worldCup.forEach(function(item,index){ //index just a regular variable
//     console.log(`${index}:${item}`)
// })

// --------------------------------------------

// 2.map()=>method for array

// worldCup.map()=>syntax->HOF

// let returnedArray=worldCup.map(function (item){ //returns a new array
//     return item.toUpperCase();
// })
// console.log(worldCup)
// console.log(returnedArray)
// let num=[10,20,30,40,50]
// // let returnedArray = num.map(function(item){
// //     return item*item
// // })
// // console.log(num)
// // console.log(returnedArray)
// let returnedArray = num.map(function(item,index){
//     return index,index
// })
// console.log(num)
// console.log(returnedArray)

// ----------------------------------------------
// 3.filter()=>method=>to filter the array

// let arr =[10,20,30,40]
// let filteredArray=arr.filter(function(item){
//     if(item>=30){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(arr)
// console.log(filteredArray)

// ----------------------------------------------


// 4.reduce()=>reduce the complete array to one element