const express= require("express")
const router= express.Router()

router.use("/api/users",require)

//Controller

const {register}= require("../controller/UserController")

//Routes
router.post("/register",register)

module.exports=router