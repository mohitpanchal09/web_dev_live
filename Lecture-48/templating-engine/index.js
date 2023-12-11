const express = require('express')
const app = express()
const path = require('path')
let arr =['hi','hello','bye']
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
// let a=path.join(__dirname,'views')
// console.log(a)
let randomNum= Math.floor(Math.random()*26+6)
app.get('/',(req,res)=>{
    res.render('app')
})
app.get('/email',(req,res)=>{
    res.render('email',{arr})
})
app.get('/random',(req,res)=>{
    res.render('random',{randomNum})
})
app.listen(8080,(req,res)=>{
    console.log('server connected')
})