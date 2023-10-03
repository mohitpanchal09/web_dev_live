

// function outer(){
//     var b =10
//     inner()
//     function inner(){
//         console.log(b)
//     }
// }
// outer() //b

// ------------------------------------


// function outer(){
//     var b =10
//     inner()
//     function inner(){
//         var b =1000;
//         console.log(b)
//     }
//     console.log(b)
// }
// outer() // 1000 10

// ------------------------------------

// function outer(){
//     var b =10
//     {
//         var b =100;
//     }
//     console.log(b)
// }
// outer() // 100 100

// ----------------------

// function outer(){
//     var b =10;
//     inner()
//     function inner(){
//         var b =1000
//         console.log(b)
//     }
//     console.log(b)
// }
// outer()

// ----------------------

// function outer(){
//     var b =10
//     {
//         var b = 1000;
//         console.log(b)
//     }
//     console.log(b)
// }
// outer()

// ---------------------------------


function outer(){
    var b =10;
    inner()
    function inner(){
        var b =1000
        console.log(b)
    }
    console.log(b)
}
outer()