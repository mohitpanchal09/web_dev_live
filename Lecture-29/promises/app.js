


// function getData(cb){
//     setTimeout(()=>{
//         // let data ='hello samarth' //assume this data is being fetched from server
//         // cb(data,null) //server decides that error will be returned or not
//         cb(null) //server decides that error will be returned or not
        
//     },4000)
// }

// // error handling is not proper in callbacks
// getData(function(data,err){
//     if(err){
//         console.log(err,'if')
//     }else{
//         console.log(data,'else')
//     }
    
// })

// ----------------------------promise-------------------------------
// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // let data ='promise resolved'; //server dega ye
//         let error = 'Server ne nahi dia'
//         // resolve(data); //waada poora
//         reject(error)
//     },4000)
// })

// // if promise is resolved
// pr1.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ----------------------

const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let data ='promise resolved'; //server dega ye
        let error = 'Server ne nahi dia'
        resolve(data); //waada poora
        reject(error)
    },4000)
})

// if promise is resolved
pr1.then((data)=>{
    console.log(data,'resolve')
})
.catch((err)=>{
    console.log(err,'error')
})