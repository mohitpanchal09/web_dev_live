// var b = 20;
// function sam(){
//     console.log(b)
// }
// sam()

// ---------------------------------

// function bahar(){
//     var v=10;
//     andar()
//     function andar(){
//         console.log(v)
//     }
// }
// bahar()

// ---------------------------------

// function outer(){

//     inner();
//     function inner(){
//         console.log(b)
//     }
//     var b = 1000 //undefined
// }
// outer()

// ---------------------------------


// function outer(){
//     var a = 10;
//     inner();
//     function inner(){
//         console.log(a) 
//         var a =30
//         console.log(a) 
//     }
//     var a = 1000 
// }
// console.log(a) //not defined error
// outer()

// ---------------------------------

// function outer(){
//     inner() // situtation 2
//     var a = 10
//     console.log(a) 
//     // inner() situatution1
//     function inner(){
//         console.log(a)
//         var a = 200
//         console.log(a)
//     }
//     console.log(a) 
// }
// // console.log(a) //error
// outer()

// ---------------------------------

// function outer(){
//     var a = 10
//     console.log(a) 
//     if(true){
//         console.log(a)
//         var a = 200
//         console.log(a)
//     }
//     console.log(a) 
// }
// outer()

// -----------------------------------

// function outer(){
//     let a = 10
//     console.log(a)  //10
//     if(true){
//         console.log(a) 
//         a = 200
//         console.log(a)
//     }
//     console.log(a) 
// }
// outer()

// -----------------------------------

// function outer(){
//     let a = 10
//     console.log(a)  
//     inner()
//     function inner(){
//         console.log(a) 
//        let a = 200
//         console.log(a)
//     }
//     console.log(a) 
// }
// outer()

// function outer(){
//     let a = 10
//     console.log(a)  
//     inner()
//     function inner(){
//         // console.log(a) 
//        var a = 200
//         console.log(a)
//     }
//     console.log(a) 
// }
// outer()

function outer(){
    let a = 10
    console.log(10)
    {
        // console.log(a) //error 
       let a = 200
        console.log(a)
    }
    console.log(a) 
}
outer()