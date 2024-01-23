const express = require('express')
const router = express.Router();
const {isLoggedIn} = require('../../middleware')
const User = require('../../models/User')
router.post('/products/:id/like',isLoggedIn,async(req,res)=>{
    let user = req.user
    let {id} = req.params
    let isLiked = user.wishlist.includes(id)
    if(isLiked){
        await User.findByIdAndUpdate(req.user._id,{$pull:{wishlist:id}})
        res.send('unliked')
    }else{
        await User.findByIdAndUpdate(req.user._id,{$addToSet:{wishlist:id}})
        res.send('liked')
    }
    
})

module.exports = router;