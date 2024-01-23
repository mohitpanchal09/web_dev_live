const express = require('express')
const router = express.Router()
const {isLoggedIn} = require('.././middleware')
const Product = require('../models/Product')
const User = require('../models/User')
const stripe = require('stripe')('sk_test_51LMFBgSALxIv85xTm8d9sYNlHhFJa4FNfAYvTtmu4XIIPUFVUUZIV4VvQmjPG35pdvHdT6p9Mrhp77VQW6T2gJHl00osCFqcSQ');

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

router.get('/checkout/:userId',async (req, res) => {
  let {userId} = req.params
  let user = await User.findById(userId).populate('cart')
  let totalAmount = user.cart.reduce((sum,curr)=>sum+curr.price
,0)
    const session = await stripe.checkout.sessions.create({
      
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: totalAmount*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4242/success',
      cancel_url: 'http://localhost:4242/cancel',
    });
  
    res.redirect(303, session.url);
})

module.exports = router;