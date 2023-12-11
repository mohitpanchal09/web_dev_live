const express = require('express')
const app = express()
const path=require('path')
const todo=['coffee','gym','eat']
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.get('/todo',(req,res)=>{
    res.render('todo',{todo})
})
app.listen(8080,(req,res)=>{
    console.log('server connected')
})