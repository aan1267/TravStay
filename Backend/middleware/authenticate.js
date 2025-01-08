const jwt=require("jsonwebtoken")
require("dotenv").config()
const userModel=require("../models/user")

const authenticate=async(req,res,next)=>{
      try{
         const token=req.headers.authorization
         if(!token){
            return res.status(401).json({message:"Unauthorized"})
         }
         console.log("token:",token)
         const verifytoken=jwt.verify(token,process.env.JWT_SECRET)

         const user=await userModel.findOne({_id:verifytoken._id})
         if(!user){
            throw new Error("user not found")
         }
         req.token=token
         req.user=user
         req.userId=user._id

         next()
       }catch(e){
        return res.status(401).json({status:401,message:"Unauthorized no token provide"})
       }
   }


module.exports={authenticate}