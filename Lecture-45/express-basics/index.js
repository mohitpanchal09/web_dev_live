

const express = require('express'); //function
// this app is the entire instance of your application
const app = express(); // called the function and returned application object


//middleware=>function
// app.use(()=>{
//     console.log('you made a request')
// }) //accepts a cb function

app.use('/',(req,res)=>{
    // console.log(req)
    // console.log(res)
    res.send('hi sever me response bhejdia')
}) 

app.listen(8080,()=>{
    console.log('server connected at 8080')
})
