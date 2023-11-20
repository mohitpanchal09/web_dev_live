const person ={
    first:'samarth',
    last:'vohra'
}
console.log(person)
// can i add property =>yes
person.age=39
console.log(person)

// can i change the existing values=>yes
person.first="samarth bhaiya"
console.log(person)

// can i delete a property=>yes
delete person.last;
console.log(person)

// ----------------------------------

//spread operator

let arr1 =[10,20,30,40,50]
let arr2= [60,70,80]

//concatenation
let ans=arr1.concat(arr2)
console.log(ans)

//spreading
arr2=[...arr1,60,70,80]
console.log(arr2)

let newAns=[...arr1,...arr2]
console.log(newAns)


// ------------------------------------
// spread on object

let obj ={
    l:'samarth',
    m:'vohra'
}
let obj1={
    ...obj,
    age:45
}
console.log(obj1)

// ----------------------------------------------------------------------

// destruturing in array
let fruits=['apple','mangoe','kela','strawberry'];

// bekar tarika
// console.log(fruits[2])
// console.log(object)

// modern way=>destructuring

// let [a,b,c,d] = fruits
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d);


// what if
let [a,b,,d,e="bananan"] = fruits
console.log(a)
console.log(b)
// console.log(c)
console.log(d);
console.log(e)

// ---------------
// desturcturing in objects

const car={
    name:'bmw',
    price:'20b'
}

//older way or normal way
// console.log(car.name)
//modern way

// let {n,p}= car //wrong , obj can be destructured on the name of key
// let {name,price}=car
// console.log(name)
// console.log(price)

//to change name of the key

let {name:changedName,price}=car
console.log(changedName)
console.log(price)

