const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const seedDb = require('./seed') 
const productRoutes  = require('./routes/product') 
const methodOverride = require('method-override')

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



app.use(productRoutes)

const PORT = 8080
app.listen(PORT||8080,()=>{
    console.log('server connected..')
})


// 1.server created
// 2. mongoose connected
// 3. model=>seed data