// var a=10;
//  function something(){
//     console.log('inside functn')
//  }
//  console.log(a)
//  something()

// --------------hoisting------------
// whenever we access the variable or functn before its declaration then it is called hosting

// var a=10;
//  function something(){
//     console.log('inside functn')
//  }
//  console.log(a)
//  something()


// ----------------------------------

function a(){ // function definition
    console.log(b) //use
    var b = 100; //defined
}
a() //access