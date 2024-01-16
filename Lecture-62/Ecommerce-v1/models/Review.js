const mongoose = require('mongoose');


// schema creation

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5

    },
    comment:{
        type:String,
        trim:true
    },
    

}, { timestamps: true })

//model creation=>JS class=>to create objects=>these objects will be documents
// Model=>singular because it will be an object and starting with capital letter
const Review = mongoose.model('Review',reviewSchema)

module.exports = Review;