// importing modules 
const { object } = require('joi');
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var passportLocalMongoose = require('passport-local-mongoose'); 
  
  
var UserSchema = new Schema({    
    email: {type: String, required:true, trim:true}, 
    // username=>will be handled by passport local mongoose
    // password=>will be handled by passport local mongoose
    gender:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        default:'buyer'
    },
    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
}); 
  
// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 
  
// export userschema 
const User = mongoose.model("User", UserSchema);
module.exports = User