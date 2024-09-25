const express= require("express")
const router= express.Router()

router.use("/api/users",require)

//Controller

const {register}= require("../controller/UserController")

//middlewares

const validate=require("../middlewares/handleValidations")

const {userCreateValidation}=require("../middlewares/userValidations")

//Routes
router.post("/register",userCreateValidation(),validate,register)

module.exports=router