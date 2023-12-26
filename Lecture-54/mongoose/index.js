const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/Amazon')
.then((res)=>{
    
    console.log('db connected')
})
.catch((err)=>{
    console.log('could not connect')
})

const Products = new Schema({
    name:String,
    price:Number,
})
const Product=mongoose.model("Product",Products)
let product1= new Product({name:"tshirt",price:"21"})
product1.save()
app.listen(8080,()=>{
    console.log('server connected...')
})