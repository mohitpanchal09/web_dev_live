const express = require('express')
const app = express()

// app.get('/r/cat',(req,res)=>{
//     res.send('cat')
// })
// app.get('/r/dog',(req,res)=>{
//     res.send('dog')
// })

// path parameter
// app.get('/r/:variable',(req,res)=>{
//     console.log(res)
//     res.send('req sent')
//     console.log(req.params)
//     let {variable} = req.params
//     console.log(variable)
// })

// query parameter
app.get('/search',(req,res)=>{
    console.log(req)
    res.send('query parameter agya')
    let {bhagwan,wife}=req.query
    console.log(bhagwan)
    console.log(wife)
})

app.listen(8080,()=>{
    console.log('server connected')
})