// async-await saves us from .then() chaining



// always returns a promise


// async function something(){

// }
// console.log(something())

// -------------------------------------

// async function something(){
//     return 10
// }
// console.log(something())



// -------------------------------------
async function something(){ 
    return 10
}

something().then((data)=>{
    console.log(data)
})