const express = require("express");
const User = require("../users");
const bcrypt = require("bcrypt");
const redisClient = require("../config/redis");
const jwt = require('jsonwebtoken');
const userAuth = require("../middleware/userAuth");

const authRouter = express.Router();
//  /auth/register
authRouter.post("/register", async (req,res)=>{

    try{

        // Validate kya uske andar firstName
        // req.body ke andar data aaya hai, usmein first_name persent hona chaiye
        ValidateUser(req.body);

        //converting password into hashing
        req.body.password =  await bcrypt.hash(req.body.password,10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error "+ err.message);
    }
})

authRouter.post("/login",async (req,res)=>{
   
    try{
         
       const people = await User.findOne({emailId:req.body.emailId});

    //    if(!(req.body.emailId === people.emailId))
    //       throw new Error("Invalid Credentials");
    
       const IsAllowed = people.verifyPassword(req.body.password);
       if(!(IsAllowed))
          throw new Error("Invalid Credentials");
        
        // JWT token
        const token = people.getJWT();    // Payload , Key
        // res.cookie("token","ghsgdhsuhauhsefesjfjsfk");
        res.cookie("token",token);
        res.send("Login Successfully");

    }
    catch(err){
        res.send("Error "+ err.message);
    }
})

authRouter.post("/logout", async (req,res)=>{
    try{
    // res.cookie("token","njdchsjhfjdsfdcbdshj");
    //    res.cookie("token",null,{expires: new Date(Date.now())});
    //    res.send("Log Out Successfully");

     const {token} = req.cookies;
     //console.log(token);

     const payload = jwt.decode(token);
     //console.log(payload);


     await redisClient.set(`token: ${token}`,"Blocked");       // set/add token in Redis DB
     // await redisClient.expire(`token:${token}`,1800);         // remove/delete token from Redis DB   It is TTL(total  time to live)
     await redisClient.expireAt(`token:${token}`, payload.exp)  // cout time from 1 jan 1970

     res.cookie("token",null,{expires: new Date(Date.now())});
     res.send("Logged Out Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

module.exports = authRouter;