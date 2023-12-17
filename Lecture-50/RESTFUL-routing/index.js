const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
const comments = [
    {
        id:1,
        name:'John Doe',
        comment:'nice'
    },{
        id:2,
        name:'elena',
        comment:'nice'
    },{
        id:3,
        name:'damon',
        comment:'nice'
    }
]

//body parsing middlewares
// app.use(express.json())//to parse json data
app.use(express.urlencoded({extended:true})) //for url encoded data

//task1=>show comments
app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

//task2=> form for new comments
app.get('/comment/new',(req,res)=>{
    res.render('new')
})


//task3=>to actually add the comment in the db/array
app.post('/comments',(req,res)=>{
    console.log(req.body)
    let {name,comment} = req.body
    comments.push({name,comment,id:comments.length+1})
    res.redirect('/comments') //get req gayi /comments pe
})

app.listen(8080,()=>{
    console.log('server connected')
})