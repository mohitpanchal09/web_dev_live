const express = require('express');
const User = require('../models/User');
const { func } = require('joi');
const router = express.Router();
const passport = require('passport')

//render signup page
router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})
//register the user
router.post('/register',async(req,res)=>{
    let {username,password,gender,email,role} = req.body
    const user = new User({username,gender,email,role})
   const newUser=await User.register(user,password)
    res.send(newUser)
})

//render signin page
router.get('/login',(req,res)=>{
    res.render('auth/login')
})

//login route
router.post('/login',
passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    req.flash('success',` welcome back ${req.user.username}`)
    console.log(req.user)
    res.redirect('/products');
  }

)
//logout route
router.get('/logout' , (req,res)=>{
    req.logout(()=>{
        console.log('logot')
        res.redirect('/login');
    });
})

module.exports = router;