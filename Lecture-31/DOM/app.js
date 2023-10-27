// using js to manipulate html

//selectors

//document=>html me se select karo is is way me

// way-1-------------------

// getElementById

let myElement=document.getElementById('samarth')
console.log(myElement)

// -------------------------

// how to style element-----
// same element pe alag alag property provied karna
myElement.style.color='red'
myElement.style.backgroundColor='black'
myElement.style.border='2px solid green'

// ek sath property apply krna
myElement.style.cssText=`
    color:white;
    font-size:45px;
    background-color:teal;
    border-radius:8px
`

// ------------------------

// way-2-----------------------(second selector)

// getElementsByTagName=>returns an array(html collection), to style them we have to loop

let heading=document.getElementsByTagName('h1')
console.log(heading)
for(let item of heading){
    item.style.cssText=`
    background-color:green;
    border-radius:5px;
    `
}


// way-3 (getElementsByClassName)=>returns an array

let classElements= document.getElementsByClassName('class-1')
console.log(classElements)

for(let item of classElements){
    item.style.cssText=`
    background-color:teal;
    color:white;
    border-radius:3px;
    `
}

// -----------------------------------

// way-4 (querySelector=>selects the first occurence)

// 3 in 1 kam karega=> alternative for 3 selectors

// id
let element1= document.querySelector('#samarth') 
console.log('element1',element1)
// className
let element2= document.querySelector('.class-1')
console.log(element2)
let element3= document.querySelector('p')
console.log(element3)

// way-5 querySelectorAll=>selects all the elements

let element4= document.querySelectorAll('#samarth')
console.log(element4)

