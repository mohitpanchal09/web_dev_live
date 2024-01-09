const mongoose = require('mongoose');


// schema creation

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }
        ]

})

//model creation=>JS class=>to create objects=>these objects will be documents
// Model=>singular because it will be an object and starting with capital letter
const Product = mongoose.model('Product',productSchema)

module.exports = Product;