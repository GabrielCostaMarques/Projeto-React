const express = require("express")
const router = express()

router.use("/api/users",require("./UserRoutes"))

//teste router
router.get("/",(req,res)=>{
    res.send("API WORKING!")
})
module.exports=router