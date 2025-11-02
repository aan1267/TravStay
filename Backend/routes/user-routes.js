const express=require("express")
const {jwtSignup,jwtLogin,validuser,logout,changePassword}=require("../controllers/userController.js")
const userRouter=express.Router()
const {authenticate}=require("../middleware/auth-middleware.js")

userRouter.post("/signup",jwtSignup)
userRouter.post("/login",jwtLogin)
userRouter.get("/validuser",authenticate,validuser)
userRouter.post("/logout", authenticate ,logout)
userRouter.post("changePassword", authenticate , changePassword)

module.exports=userRouter