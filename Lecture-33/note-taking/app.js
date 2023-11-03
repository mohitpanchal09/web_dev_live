


let input = document.querySelector('input')
let button = document.querySelector('button')
let list = document.querySelector('#list')
button.addEventListener('click',(e)=>{
    let noteText = input.value
    let li = document.createElement('li')
    li.innerText=noteText
    list.appendChild(li)
    input.value=''
    li.addEventListener('click',()=>{
        li.remove()
    })
})

