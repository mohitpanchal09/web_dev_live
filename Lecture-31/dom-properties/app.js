

// query selector

// 1. innertext----
let p = document.querySelector('p') 

console.log(p.innerText) //brainful and can read css

// 2.textContent
let q = document.querySelector('p') //

console.log(q.textContent) //cant read css(brainless)

// 3.innerHTML
console.log(p.innerHTML) //reads css+ shows tags too

q.innerText='hello'
q.textContent='kello'
q.innerHTML='pello <h1>ok</h1>'