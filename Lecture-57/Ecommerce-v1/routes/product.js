const express = require('express');
//mini application
const Product = require('../models/Product')
const Review = require('../models/Review');
const { validateProduct } = require('../middleware');

const router = express.Router();

//get all products 
router.get('/products',async (req,res)=>{
    try{

    
  let products = await Product.find({}) //gives all products
  res.render('index',{products})
}
catch(err){
    res.render('error',{err:e.message})
}
})

//new form 
router.get('/product/new',(req,res)=>{
    res.render('new')
})

//actually adding the product

router.post('/products',validateProduct,async (req,res)=>{
    let {name,img,price,desc} =req.body
   await Product.create({name,img,price,desc}) //automatically save krdega db me
    res.redirect('/products')
})

//show particular product

router.get('/product/:id',async(req,res)=>{
    let {id}=req.params
    let product = await Product.findById(id).populate('reviews');
    console.log(product)
    res.render('show',{product})
})

//show edit form
router.get('/product/:id/edit',async(req,res)=>{
    let {id} = req.params
    let product = await Product.findById(id)
    res.render('edit',{product})
})

//actually edit the page
router.patch('/products/:id',async(req,res)=>{
    let {id}= req.params
    let {name,img,price,desc}= req.body
  await  Product.findByIdAndUpdate(id,{name,img,price,desc})
  res.redirect('/products')
})

//delete product

router.delete('/products/:id',async(req,res)=>{
    let {id}= req.params
    // await Product.findByIdAndDelete(id)
    let product=await Product.findById(id)
    for(let ids of product.reviews){
        await Review.findByIdAndDelete(ids)
    }
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

module.exports = router;