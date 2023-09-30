// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// ---------------------
// let i=1;
// while (i<=10){
//     console.log(i)
//     i+=1
// }

// ---------------------
// for-of

// arr=[10,20,39,3,359]
// for(let item of arr){
//     console.log(item)
// }
// item=>iterator=>arr[i]

// ---------------------

// for-in
// let person ={
//     name:'samarth',
//     age:'29',
//     package:'50lpa'
// }

// for ( let i in person){
//     console.log(`${i}:${person[i]}`)
//     // console.log(person.i) //undefined=>because no key exist in object of name i
// }


// break and continue
let arr=[20,30,9,93,83]
for(let item of arr){
    if(item==9){
        break
    }
    console.log(item)
}
for(let item of arr){
    if(item==9){
        continue
    }
    console.log(item)
}