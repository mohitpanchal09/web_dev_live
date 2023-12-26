const express = require('express')
const app = express()

const arr=[1,2,3]

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/cat',(req,res)=>{
    res.send('cat agayi')
})
app.post('/new',(req,res)=>{
    arr.push(4)
    res.send(arr)
})

app.post('/test1',(req,res)=>{
     const data = req.body
     res.send(data)
})
app.get('/test2',(req,res)=>{
    const data = req.query.name
    res.send(data)
})
app.listen(8080,()=>{
    console.log('server connected')
})