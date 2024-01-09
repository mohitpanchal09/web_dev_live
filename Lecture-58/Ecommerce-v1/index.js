const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')
const seedDb = require('./seed');
const productRoutes  = require('./routes/product'); 
const reviewRoutes=require('./routes/review');
const methodOverride = require('method-override')

let  configSession = {
    secret:'keyboard cat',
    resave:'false',
    saveUninitialized:false,
}


mongoose.connect('mongodb://127.0.0.1:27017/julybatch')
.then(()=>{
    console.log('db connected....')
})
.catch((err)=>{
    console.log('error')
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true})) // to parse body data
app.use(methodOverride('_method')); // method-override middleware
// seedDb() //ek hi bar chalana fr comment krdena

app.use(session(configSession))
// -------
app.use(flash())
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error=req.flash('error');
    next()
})

// -------
app.use(productRoutes)
app.use(reviewRoutes)


const PORT = 8080
app.listen(PORT||8080,()=>{
    console.log('server connected..')
})


// 1.server created
// 2. mongoose connected
// 3. model=>seed data
// 4.
// 5.