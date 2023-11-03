let h1=document.querySelector('h1')
let h2=document.querySelector('h2')
let h3=document.querySelector('h3')

// 1. add class
// h1.classList.add('class1')
// h1.classList.add('class2')
// h1.classList.add('class3')

//  or

h1.classList.add('class1','class2','class3')

// 2.remove
h1.classList.remove('class1')

// 3.toggle
h3.classList.toggle('class3')

// 4.contains
console.log(h3.classList.contains('class3'))