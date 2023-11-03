



// ---------

// const inp = document.querySelector('input')
// inp.addEventListener('input',()=>{
//     console.log(`clicked`)
// })

// ------------------------------
const input = document.querySelector('input')
input.addEventListener('input',(e)=>{
    console.log(e) //e=>object ie event
    console.log(e.target) //element
    console.log(e.target.value) //return entered value
    console.log(e.data)
})

// task