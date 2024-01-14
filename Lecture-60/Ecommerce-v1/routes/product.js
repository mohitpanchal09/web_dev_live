const express = require('express');
//mini application
const Product = require('../models/Product')
const Review = require('../models/Review');
const { validateProduct,isLoggedIn, isSeller, isProductAuthor } = require('../middleware');

const router = express.Router();

//get all products 
router.get('/products',async (req,res)=>{
    try{

    
  let products = await Product.find({}) //gives all products
  res.render('products/index',{products})
}
catch(err){
    res.render('error',{err:e.message})
}
})

//new form 
router.get('/product/new',isLoggedIn,(req,res)=>{
    res.render('products/new')
})

//actually adding the product

router.post('/products',isSeller,validateProduct,async (req,res)=>{
    let {name,img,price,desc} =req.body
   await Product.create({name,img,price,desc,author:req.user._id}) //automatically save krdega db me
    res.redirect('/products')
})

//show particular product

router.get('/product/:id',async(req,res)=>{
    let {id}=req.params
    let product = await Product.findById(id).populate('reviews');
    
    req.flash('success','product review submitted')
    res.render('products/show',{product})
})

//show edit form
router.get('/product/:id/edit',isLoggedIn,isProductAuthor,async(req,res)=>{
    let {id} = req.params
    let product = await Product.findById(id)
    res.render('products/edit',{product})
})

//actually edit the page
router.patch('/products/:id',isProductAuthor,async(req,res)=>{
    let {id}= req.params
    let {name,img,price,desc}= req.body
  await  Product.findByIdAndUpdate(id,{name,img,price,desc})
  req.flash('success','product updated successfully')
  res.redirect('/products')
})

//delete product

router.delete('/products/:id',isLoggedIn,isProductAuthor,async(req,res)=>{
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