  const mongoose = require('mongoose');
  const bcrypt = require("bcrypt");
  const jwt = require('jsonwebtoken');
  
  const {Schema} = mongoose

  const userSchema = new Schema({

    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type:String
    },
    age:{
        type:Number,
        min:14, 
        max:70,
        required:true
    },
    gender:{
        type:String,
       // enum:["male","female","other"] // if input not exist in enum then show error
       validate(value){
         
          if(!["male","female","other"].includes(value))
              throw new Error("Invalid Gender");
       }
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase: true,
        immutable: true,   // jo change na ho saka          ja error nhi show karta on applying change
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"This is the default photo"
    }
  }, {timestamps: true})

userSchema.methods.getJWT = function(){
   const ans = jwt.sign({_id:this._id, emailId:this.emailId},process.env.SECRET_KEY,{expiresIn:1800});
   return ans;
}

userSchema.methods.verifyPassword = async function(userPasssword){
   const ans = await bcrypt.compare(userPasssword, this.password);
   return ans;
}

// create Model : mean collection create karna
   const User = mongoose.model("user",userSchema) 

  module.exports = User;