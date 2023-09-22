


// ----------------syntax-----------------


// // function definition/declaration
// function sum(){

// }

// sum(); //function call

// ---------------------------------------


// function sum(){
//     let num1=10;
//     let num2=30;
//     console.log(num1+num2 +num3);
//     // reference error

// }
// sum();


// ---------------------------------------

// parameterized function



// function sum(n1,n2,n3){ //parameter
//     let num1 =n1;
//     let num2=n2;
//     console.log(n3) //n3 is not defined = undefined
//     console.log(n1+n2+n3)
// }
// sum(10,60); //arguement


// ---------------------------------------

// default parametrized functions
// function sum(n1,n2,n3=57){ //default value of n3
//     let num1 =n1;
//     let num2=n2;
//     console.log(n3) //n3 is not defined = undefined
//     console.log(n1+n2+n3)
// }
// sum(10,60); //arguement



// --------------------------------------
// function sum(n1,n2,n3=57){ //default value of n3
    
//     console.log(n1+n2+n3)
// }
// sum(10,60,70);


// --------------------------------------
function sum(num2){
    let num1=30
    let ans = num1+num2;
    return ans
}
let final=sum(4)  //return value yaha aegi
console.log(final)
