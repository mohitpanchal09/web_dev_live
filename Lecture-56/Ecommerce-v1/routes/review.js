const express = require('express')
const router = express.Router();
const Review = require('../models/Review')
const Product = require('../models/Product')


router.post('/products/:id/rating', async(req,res)=>{
    let {id} = req.params
    let {rating,comment} = req.body
    let product = await Product.findById(id)
    // new review
    let review = new Review({rating,comment})
    product.reviews.push(review)
    await product.save()
    await review.save()
    res.redirect(`/product/${id}`)
})



module.exports = router;