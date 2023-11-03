let btn = document.querySelectorAll('button')
let input = document.querySelector('input')

for(let item of btn){

    item.addEventListener('click',()=>{
        if(item.textContent==='c'){
            input.value=""
        }else if(item.textContent==='='){
            try{ //sahi kam
                let ans= eval(input.value)
                input.value=ans
            }catch(e){ //dikkat wala kam
                input.value='invalid'
            }
            
            
        }
        else{input.value+=item.textContent}
    })
}