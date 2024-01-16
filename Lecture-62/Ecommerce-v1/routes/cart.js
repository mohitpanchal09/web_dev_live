const express = require('express')
const router = express.Router()
const {isLoggedIn} = require('.././middleware')
const Product = require('../models/Product')
const User = require('../models/User')


router.get('/user/cart',isLoggedIn,async(req,res)=>{
    let userId = req.user._id
    let user = await User.findById(userId).populate('cart')
    let totalAmount = user.cart.reduce((sum,curr)=>sum+curr.price
,0)
    res.render('cart/cart',{user,totalAmount})
})

router.post('/user/:productId/add',isLoggedIn,async(req,res)=>{
    let {productId} = req.params
    let userId = req.user._id
    let user = await User.findById(userId)
    let product = await Product.findById(productId)
    user.cart.push(product)
    await user.save()
    res.redirect('/user/cart')
})

module.exports = router;