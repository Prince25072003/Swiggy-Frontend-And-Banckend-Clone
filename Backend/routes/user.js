const express = require("express");
const userAuth = require("../middleware/userAuth");
const User = require("../users");

const userRouter = express.Router();

userRouter.get("/resturant", async (req,res)=>{  // here first user authenticate then function execute
    try{
      const result =   await User.findById({_id: '6ab61402302794f38502c249'})
      res.send(result)
    }
    catch(err){
        res.send("Error"+err.message)
    }
})

userRouter.delete("/user/:id", userAuth, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully")
    }
    catch(err){
        res.send("Error"+err.message)
    }
})

userRouter.patch("/user", userAuth, async (req,res)=>{
    try{
        const {_id, ...update} = req.body;
        await User.findByIdAndUpdate(_id, update, {"runValidators":true});
        res.send("Updated Successfully")
    }
    catch(err){
        res.send("Error"+err.message)
    }
})

module.exports = userRouter;