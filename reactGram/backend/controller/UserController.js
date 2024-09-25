const User = require("../models/User")
const bcript=require("bcryptjs")
const jwt=require("jsonwebtoken")

const jwtSecret = process.env.JWT_PASSECRET;


//Generate user token

const generetToken=(id)=>{
    return jwt.sign({id},jwtSecret,{
        expiresIn:"7d",
    })
}

//Register user and sign in

const register=async(req, res)=>{
    res.send("Registro123")
}

module.exports={
    register,
}