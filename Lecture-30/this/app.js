//1. regular function invocation

// let obj ={
//     number:200,
//     fun:function(){
//         console.log(this)
//     }
// }

// 1. bina obj k bhi this exist krta hai
// 2. this always depends on how it is being called

// function fn(){
   
//     console.log(this)

// }
// fn(); //regular function calling or direct calling

// // 1. in case of regular function calling this will always points to the window object
// // window=>global object

// // for eg

// function saraswati(){
//     console.log(this)
// }
// saraswati() // direct function invocation



// ----------------------------------------

// 2. method invocation

// let obj={
//     number:200,
//     fun:function(){
//         console.log(this)
//     }
// }
// obj.fun(); // function is not called directly, its calling depends on method called method invocation

// in method invocation this always points to the object it is being called upon

// for eg:

// let obj2={
//     a:200,
//     sam:function(){
//         console.log(this)
//     }
// }

// obj2.sam(); //method invocation, it is not direct function invocation


// eg2:


// let obj2={a:200,
// sam:function(){
//     console.log(this)
// }
// }

// let m = obj2.sam
// m() //window function because of direct invocation of object

// eg3:

// let obj3={
//     a:10,
//     fn:function(){
//         console.log(this) //obj3
        
//         function inner(){
//             console.log(this) //window

//         }
//         inner() //direct function calling
//     }
// }
// obj3.fn() //method invocation


// ----------------------------------------------------


// 3. construcator invocation
//  in case of constructor invocation this always points to the newly created object
// function CreateObj(){
//     this.x = 200
// }

// let obj = new CreateObj(); //creating a new object
// console.log(obj.x)



// -----------------------------------------------------------------------
// 4.Indirect invocation
// call()
// apply()
// bind()


// call and apply

// 1.call()

// let obj ={
//     a:20,
//     fn:function(a,b,c){
//         console.log(this,a,b,c)
//     }
// }

// let obj2={
//     a:50,
    
// }
// obj.fn(1,2,3); //method invocation

// // we dont have fn in obj2 still we can call fn using obj2
// // yes =>how ?=>call()

// obj.fn.call(obj2)
// obj.fn.call(obj2,1,2,3)

// ----------------------------------------


// 2.apply

// call and apply are same => changes the context of this
// obj.fn.apply(obj2,1,2,3) ❌
// obj.fn.apply(obj2,[1,2,3]) ✅

// ----------------------------------------

// 3.bind()

// let obj3 = {
//     fn:function(){
//         console.log(this)
//     }
// }

// let myfunc=obj3.fn.bind(obj3) //call =>no, assings=> yes
// console.log(myfunc)
// myfunc()

// function fn3(){
//     console.log(this)
// }

// let fn4= fn3.bind(100);
// fn4();

// ---------------------------------------------------------------------------------

// 5. arrow functions

// ()=>{}

// let obj5={
//     fn : function(){
//         console.log(this)
//     }
// }
// obj5.fn();

// eg2:
// let obj5={
//     fn : function(){
//         function sam(){
//             console.log(this)

//         }
//         sam() ///direct calling
//     }
// }
// obj5.fn();

// eg3:

let obj5={
    
    fn : function(){
        let sam=()=>{
            console.log(this)

        }
        sam() ///direct calling
    }
}
obj5.fn();
