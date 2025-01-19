const express=require("express")
const userController=require("../controllers/userController.js")
const userRouter=express.Router()
const {authenticate}=require("../middleware/authenticate.js")

userRouter.post("/signup",userController.jwtSignup)
userRouter.post("/login",userController.jwtLogin)
userRouter.get("/validuser",authenticate,userController.validuser)
userRouter.post("/logout",authenticate,userController.logout)

module.exports=userRouter