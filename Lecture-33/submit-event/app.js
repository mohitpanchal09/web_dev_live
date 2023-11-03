let form = document.querySelector('form')
// form.addEventListener('submit',()=>{
//     console.log('form submitted')
// })

// ----------------------------
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()// refresh ni hoga
//     console.log('form submitted')
// })


// -------------to get the values of form------

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form)
    console.log(form.elements) //html collection
    console.log(form.elements[0].value) //html collection

})