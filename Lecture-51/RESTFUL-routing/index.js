const express = require('express')
const app = express()
const path = require('path')
const methodOverride= require('method-override')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

let comments = [
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

//method override
app.use(methodOverride('_method'))
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

//task4=>show info about one comment =>req.params
app.get('/comments/:id',(req,res)=>{
    // console.log(req.params)
    // res.send(`req.params`)
    //req.params gives string value 
    let {id}= req.params

    // let cmmnt = comments.find((item)=>{
    //     return item.id===parseInt(id)
    // })
    // or
    let cmnt = comments.find((item)=>{
       return item.id==id
    })
    
    res.render('show',{cmnt})
})

//task5 =>to edit existing comment=>shows form to edit
app.get('/comments/:id/edit',(req,res)=>{
    let {id} = req.params
    let cmnt = comments.find((item)=>{
        return item.id==id
    })
    res.render('edit',{cmnt})
})

//task6=>to patch the  comment=>actually edit the comment
app.patch('/comments/:id',(req,res)=>{
    let {id} = req.params
    let cmt = comments.find((item)=>{
        return item.id==id
    })
    let {comment} = req.body
    cmt.comment=comment
    res.redirect(`/comments`)
})

//delete=>to delete a comment
app.delete('/comments/:id',(req,res)=>{
    let {id} = req.params
    comments=comments.filter((comment)=>{
        return comment.id!=id
    })
    res.redirect('/comments')

})
app.listen(8080,()=>{
    console.log('server connected')
})