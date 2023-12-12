const express = require('express')
const app = express();
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// to get static content in  app
app.use(express.static(path.join(__dirname,'public')))

// route=>page>styling will come from public folder
app.get('/whatever',(req,res)=>{
    res.render('whatever')
})
// new route>new page =>styling(style.css and bootstrap) + DRY principle
app.get('/horror',(req,res)=>{
    res.render('horror')
})
app.listen(8080,(req,res)=>{
    console.log('server connected')
})