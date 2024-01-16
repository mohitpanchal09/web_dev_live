const Product = require('./models/Product')
const {productSchema,reviewSchema} = require('./schema')



const validateProduct = (req,res,next) =>{
    let {name,img,price,desc} = req.body
    const {error} = productSchema.validate({name,img,price,desc})
    if(error){
        const msg=error.details.map((err)=>
            err.message
        ).join(',')
        console.log(msg)
        return res.render('error',{msg})
    }
    next();
}

const validateReview = (req,res,next) =>{
    let {rating,comment} = req.body
    let {error} = reviewSchema.validate({rating,comment})
    if(error){
        const msg = error.details.map((err)=>{
            err.message
        }).join(',')
       
        return res.render('error',{msg})
    }
    next()

}

const isLoggedIn = (req,res,next)=>{
    if(req.xhr && !req.isAuthenticated()){
        return res.error({'msg':'you need to login first'})
    }
    if(!req.isAuthenticated()){
        req.flash('error','You need to login first')
        return res.redirect('/login')
    }
    next();
}

const isSeller = (req,res,next) =>{ 
    if(!req.user.role){
        req.flash('error','you are not login')
        return res.redirect('/products')
    }else if(req.user.role!=='seller'){
        req.flash('error','you are the buyer')
        return res.redirect('/products')
    }
    next()
}

const isProductAuthor = async (req,res,next)=>{
    let {id} = req.params
    let product = await Product.findById(id)

    if(!product.author.equals(req.user._id)){
        req.flash('error','you are not owner of the product')
        return res.redirect(`/products`)
    }
    next();
    
}

module.exports = { validateProduct,validateReview,isLoggedIn,isSeller,isProductAuthor }