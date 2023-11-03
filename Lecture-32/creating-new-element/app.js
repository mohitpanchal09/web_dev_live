let h2= document.createElement('h2')
h2.innerText='samarth'
let section = document.querySelector('section')
// add this element to section
let p = document.createElement('p')
p.innerText='hello bacchi'
// 1.appendChild()
// to add single element 
section.appendChild(h2)

// 2. append()=>to add multiple elements

section.append(h2,p)
section.append('samarth bhaiya')

// to add at start
// prepend
section.prepend('at the starting')


// before and after particular element
section.before(h2)
section.after(h2)
