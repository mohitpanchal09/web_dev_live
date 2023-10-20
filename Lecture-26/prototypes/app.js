let todo={
    title:'therapist',
    desc:function(){
        return `you have to goto ${this.title}`
    }
}
// console.log(todo.title)
// console.log(todo.desc())
// console.log(todo.samarth) //undefined
// console.log(todo.samarth()) //error 

// console.log(todo.toString())

// console.log(todo)
console.log(todo.__proto__)
console.log(todo.__proto__===Object.prototype) //true
console.log(todo.__proto__.__proto__) //null

// -----------------------------------

// let arr =['my','name','is','samarth']
// console.log(arr)

// -----------------------------------
let str='i am thanos'
console.log(str)
console.log(str.__proto__===String.prototype) //true
console.log(str.__proto__.__proto__===Object.prototype) //true
console.log(str.__proto__.__proto__.__proto__===null) //true


