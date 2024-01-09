const express = require('express')
const router = express.Router();
const Review = require('../models/Review')
const Product = require('../models/Product');
const { validateReview } = require('../middleware');


router.post('/products/:id/rating', validateReview ,async(req,res)=>{
    try{

    
    let {id} = req.params
    let {rating,comment} = req.body
    let product = await Product.findById(id)
    // new review
    let review = new Review({rating,comment})
    product.reviews.push(review)
    await product.save()
    await review.save()
    //adding flash messages

    req.flash('success','Review added successfully');

    res.redirect(`/product/${id}`)
    }catch(e){
        res.render('error',{err:e.message})
    }
})



module.exports = router;