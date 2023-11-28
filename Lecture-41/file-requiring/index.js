const pi =3.145
const square=num=>num*num
const sum =(a,b)=>a+b
console.log(pi)
console.log(square(4))
console.log(sum(2,5))

//when you dont export anything from file an empty object is sent by default
// module.exports={
//     PI:pi,
//     SQUARE:square,
//     SUM:sum
// }

module.exports={pi,square,sum} //by default empty object is sent

module.exports='samarth'