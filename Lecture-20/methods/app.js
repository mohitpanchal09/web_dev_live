// let marks={
//     dsa:55,
//     ml:34,
//     devpt:67,
//     totalMarks:function(){
//         return this.dsa+this.ml+this.devpt
//     }
// }

// console.log(marks)
// console.log(marks.totalMarks())

// -----------------------------------------------------------------------

let marks={
    dsa:55,
    ml:34,
    devpt:67,
    totalMarks:function(fine){
        return this.dsa+this.ml+this.devpt -fine
    }
}
console.log(marks.totalMarks(80))
