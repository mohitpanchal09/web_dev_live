// b() //yes
// console.log(a) //yes
// var a =30
// function b(){
//     console.log(c) //yes
//     var c =300;
// }

// accessing a variable/function before its declaration

// --------------------------------------------
// console.log(a) //yes
// var a = 10;
// console.log(a) //no
// function b(){
//     console.log(' aa dekhe zra kisme hai kitna dam')
// }
// b() //no
// --------------------------------------------
// let a //declare ----> let a =undefined; undefined assigned by js
// console.log(a) //no hoisting because variable is already declared where js engine assigned undefined
// a=undefined; //reinitialize




// -------------------------------
// // no hositing
// const a =100; //declare
// console.log(a)

// -------------------------------
// console.log(sam) //hoisting
// a() //hoisting
// var sam =100;
// function a(){
//     console.log('inside a')
// }


// --------------------------------
// console.log(sam)
// let sam= 100;

// --------------------------------

// var a ;
// console.log(a) //no hosting
// -----------------------
// console.log(a) //yes
// var a;

// --------------------------------
// console.log(a) //app.js:54 Uncaught ReferenceError: Cannot access 'a' before initialization
// let a;
// a= 1000;
// console.log(a) 

// error aega 

// --------------------------------
// console.log(a) //app.js:54 Uncaught ReferenceError: Cannot access 'a' before initialization
// const  a =200