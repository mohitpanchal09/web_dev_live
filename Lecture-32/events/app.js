// inline way
function something(){
    console.log('pressed the button')
}

// -----2nd way--
let btn = document.querySelector('button')
// btn.onclick= function(){
//     console.log(`congrats you got your first job`)
// }

// interview sawal

function nacho(){
    console.log('natu natu natu..')
}

function gaao(){
    console.log('saregamapdanisa')
}

//ek event par ek hi kam hora hai
// btn.onclick= nacho;
// btn.onclick= gaao;

//only gaao will be executed because overriding is being perforemd here

// ---------------------

// 3rd way in the picture
//i.e addEventListener()
// btn.addEventListener('click',function(){
//     console.log('event chalgya')
// })

btn.addEventListener('click',nacho);
btn.addEventListener('click',gaao)


// TASK
