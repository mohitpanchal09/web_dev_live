let input = document.querySelector('input')
let h1= document.querySelector('h1')
input.addEventListener('input',(e)=>{
    h1.innerText=e.target.value
})
