
// normal function defn
function sum1(a,b){
    return a+b
}
console.log(sum1(5,6))

// ------------arrow functions (way1)------------------

const sum2 = (a,b)=>{
    return a+b
}
console.log(sum2(7,8))

// ------------arrow functions (way2)------------------
let sqr = (num)=>  num*num;

console.log(sqr(6))

// ------------arrow functions (way3, if one arguement we can remove parenthesis)----------

let cube = num => num*num*num
console.log(cube(6))