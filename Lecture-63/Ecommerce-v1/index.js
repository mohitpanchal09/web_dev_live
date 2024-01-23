const express = require('express');
const app = express();
const path = require('path');
// const dotenv = require('dotenv').config({
//     // path:'../'
// })
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')
const seedDb = require('./seed');
const productRoutes  = require('./routes/product'); 
const reviewRoutes=require('./routes/review');
const methodOverride = require('method-override');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const productApi = require('./routes/api/productapi'); //api

const LocalStrategy = require('passport-local'); //pass
const User = require('./models/User');


mongoose.connect(process.env.mongo_url)
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


let  configSession = {
    secret:'keyboard cat',
    resave:'false',
    saveUninitialized:false,
    cookie:{
        httpOnly : true,
        expires:Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
    }
}

app.use(session(configSession))
// -------
app.use(flash())



// use static serialize and deserialize of model for passport session support
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate())); //pass

app.use((req,res,next)=>{
    res.locals.currentUser = req.user; 
    res.locals.success = req.flash('success');
    res.locals.error=req.flash('error');
    next()
})

// -------
app.use(productRoutes)
app.use(reviewRoutes)
app.use(authRoutes);
app.use(productApi)
app.use(cartRoutes)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('server connected..')
})


// 1.server created
// 2. mongoose connected
// 3. model=>seed data
// 4.
// 5.