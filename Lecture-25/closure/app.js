

// function myFunc(){
//     let username='goli'
//     function masti(){
//         console.log(username)
//     }
//     masti() //calling
// }
// myFunc();

// ---------------closure--------------------
// whenever we return a function , that function is never returned 
// alone. it always returns with the lexical environment along with it


function myFunc(){
    let username='goli'
    function masti(){
        console.log(username)
    }
    return masti //returning a function
}
let returnedFunction=myFunc();
console.log(returnedFunction())