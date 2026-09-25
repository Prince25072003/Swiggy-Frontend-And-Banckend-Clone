const express = require("express");
const app = express();
const main = require("./database");
const User = require("./users");
const ValidateUser = require("./utils/validate");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");
require('dotenv').config();   // it attach .env file detail in Global Object
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const redisClient = require("./config/redis");
const cors = require("cors");

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:1234",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser())

app.use("/auth",authRouter);
app.use("/user",userRouter);

const InitlizeConnection = async ()=>{
    try{
     
    await Promise.all([redisClient.connect(), main()]);
    console.log("DB Connected");

       app.listen(process.env.PORT || 5000, ()=>{
       console.log("Listen at port " + (process.env.PORT || 5000));
       })
    }
    catch(err){
        console.log("Error: "+err);
    }
}

InitlizeConnection();

// main()
// .then(()=>{
//     console.log("Connected to DB")
// app.listen(process.env.PORT,()=>{
//     console.log("Listen at port 3000");
// })
// })
// .catch((err)=>console.log(err))