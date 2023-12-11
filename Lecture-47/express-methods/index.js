const express = require('express')
const app = express()


// app.use((req,res)=>{
//     res.send("I am middleware")
// })

app.use('/cat',(req,res)=>{
    res.send('cat')
})

app.get('/samarth',(req,res)=>{
    res.send('samarth')
})

// app.get('/cat',(req,res)=>{
//     res.send('iam cat')
// }) // wont work because res already sent

// adnaced midddleware
app.use('/product/buy',(req,res,next)=>{
    console.log('not login')
    next() //agle mdlwar pe bhjo jispe same path ho
})
// app.get('/cat',(req,res)=>{
//     res.send('cat')
// })
app.get('/product/buy',(req,res)=>{
    res.send('login karo')
})

app.get('*',(req,res)=>{
    res.send('404')
})

app.listen(8080,()=>{
    console.log('server connected')
    console.log('running')
})