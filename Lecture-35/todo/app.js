let toDoArr=[]
let add = document.getElementById('add')
let inputText = document.getElementById('todo-text')
let inputDate=document.getElementById('todo-date')
let container=document.querySelector('.grid-container2')

let h2 = document.querySelector('h2')
add.addEventListener('click',()=>{
    let todo=inputText.value
    let date=inputDate.value



    if(todo===''||date===''){
       h2.innerText='Fill all the details'
    }else{

    
    toDoArr.push([todo,date])
    container.innerHTML=''
    h2.innerText=''
    for(let item of toDoArr){
        
        let h3=document.createElement('h3')
        h3.innerText=item[0]
        let p = document.createElement('p')
        p.innerText=item[1]
        let deleteButton=document.createElement('button')
        deleteButton.innerText='Delete'
        deleteButton.setAttribute('class','delete')
        deleteButton.setAttribute('key',toDoArr.indexOf(item))
        console.log(deleteButton)
        container.appendChild(h3)
        container.appendChild(p)
        container.appendChild(deleteButton)
        inputText.value=''
        inputDate.value=''
        
    
    }
    handleDelete()
}
    
})



function updateToDo(){
    container.innerHTML=''
    h2.innerText=''
    for(let item of toDoArr){
        
        let h3=document.createElement('h3')
        h3.innerText=item[0]
        let p = document.createElement('p')
        p.innerText=item[1]
        let deleteButton=document.createElement('button')
        deleteButton.innerText='Delete'
        deleteButton.setAttribute('class','delete')
        deleteButton.setAttribute('key',toDoArr.indexOf(item))
        console.log(deleteButton)
        container.appendChild(h3)
        container.appendChild(p)
        container.appendChild(deleteButton)
        inputText.value=''
        inputDate.value=''
        console.log(toDoArr)
    
    }
    handleDelete()
    
}

function handleDelete(){
    let deleteButtons= document.getElementsByClassName('delete')
    for(let btn of deleteButtons){
        btn.addEventListener('click',()=>{
            let index = btn.getAttribute('key')
            toDoArr.splice(index,1)
            console.log('ok')
            updateToDo()
        })
        
    }
}