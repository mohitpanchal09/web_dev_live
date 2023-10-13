function counter(){
    let count = 0

    return {
        getCount:function(){
            return count
        },
        increment:function(){
            count++
        },
        decrement:function(){
            count--
        }
        ,reset:function(){
            count=0
        }
    }
}

let counter1=counter() //returns object not the count variable
console.log(counter1) 
console.log(counter1.getCount()) //0
console.log(counter1.increment()) //+1
console.log(counter1.getCount()) //  //1

console.log(counter1.decrement()) //-1
console.log(counter1.getCount()) //0

console.log(counter1.reset()) //=0
console.log(counter1.getCount()) //0

