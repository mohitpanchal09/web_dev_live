const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser('hiiamyoursecretteacher')) //to make the cookies visible


//cookies server bhejta hai=>ek esa route banate h jo cookie bheje to the client
app.get('/',(req,res)=>{
    // res.send(req.cookies) does not give signed cookies
    res.send(req.signedCookies)
})

app.get('/setcookies',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('location','delhi');
    res.cookie('username','samarth_vohra')
    res.cookie('age',21)
     // wrong=>objects are not recommended to send in the cookie
    // res.cookie({'color':'red','device':'iphone se 2020'})
    // res.cookie('password','P@nchal09') 
    
    // make tghe passwrd secure by using signed cookies
    res.cookie('password','P@nchal09',{signed:true})
   
     
    res.send('cookies sent')
})
app.get('/getcookies',(req,res)=>{
    let {username} = req.cookies
    console.log(username)
    res.send(req.cookies)
})

app.listen(5050,()=>{
    console.log('server at 5050')
})