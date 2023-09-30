//----------------------1. var------------------------

// var something=100;
// console.log(something)

// --------------
// var something=100; //declaration
// console.log(something)
// something=200; //reinitialization
// console.log(something)


// ---------------------------------------
// var something =200; //declaration
// var something =500; //redeclaration
// console.log(something)


// --------------------------------------------------------



// -----------------------2. let ---------------------

// let beesLakh=20

// beesLakh=40; //renitinialize=>yes
// console.log(beesLakh)

// let beesLakh=50; //redeclare=>No


// --------------------------------------------------------


// ------------------------3. const ------------------------

// const bhai =100;
// console.log(bhai)
// // bhai =500; //reinitialize=>No
// const bhai=3959 //redeclare=>No


// --------------------------------------------------------

// sawal



// quest 1.

// const samarth; //js engine=>undefined
// samarth=100;
// console.log(samarth)




// quest 2.

const person ={
    username:'lama',language:'nashe'
}
console.log(person.username)
console.log(person.language)

person.lang='saste nashe'
console.log(person)
// value changed because we are only changing the value inside the obj but we are not changing the refernce of the object, we can change the value but we cannot change ethe referemce
person.age='21'
console.log(person)