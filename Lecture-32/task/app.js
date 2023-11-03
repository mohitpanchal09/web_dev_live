// function color(){
//     let body = document.querySelector('body')
//     body.style.cssText=`
//     background-color:red
//     `
// }

// or

let btn = document.querySelector('button')
let body= document.querySelector('body')
// btn.addEventListener('click',()=>{
//     body.style.backgroundColor='red'
// })

// or

btn.addEventListener('click',()=>{
    body.classList.toggle('red')
})