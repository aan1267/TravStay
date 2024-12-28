const userModel=require("../models/user.js")
const bcrypt = require("bcryptjs")



const jwtSignup=async(req,res)=>{
     const {username,email,password,cpassword}=req.body

     if(!username || !email || !password){
        return  res.status(404).json({message:"All Fields are required"})
     }
      
     try{
        let newUser=new userModel({
            username,
            email,
            password,
            cpassword,
        })
        //here password hashing
        await newUser.save()
       return  res.status(201).json({status:201,newUser})
     }catch(e){
        res.status(500).json({ error: e.message });
      }
    }


const jwtLogin= async(req,res)=>{
    const {email,password}= req.body

    if(!email || !password){
       return res.status(404).json({message:"All Fields Required"})
    }
    try{
    const userValid=await userModel.findOne({email:email})

    if(userValid){
        const isMatch= await bcrypt.compare(password,userValid.password)
    
    if(!isMatch){
       res.status(422).json({error:"Invalid details"})
    }else{
        const token= await userValid.generateAuthtoken()

        res.cookie("token",token,{
            expires:new Date(Date.now()+9000000),
            httponly:true,
        })

        const result={
            userValid,
             token,
        }
        return  res.status(201).json({status:201,result})
       }
     }
    }catch(e){
        res.status(500).json({"error":e.message})
    }
}

const validuser = async(req,res)=>{
    // console.log("done")
   try{
    const ValidUserOne= await userModel.findOne({_id:req.userId})
    res.status(201).json({status:201,ValidUserOne})
   }catch(e){
    res.status(401).json({status:401,e})
   }
}

const logout= async(req,res)=>{
   try{
    req.user.tokens=req.user.tokens.filter((currenttoken)=>{
        return currenttoken.token !== req.token
    })

    res.clearCookie("token", {path:"/"})

    await req.user.save()
    res.status(201).json({status:201,token:req.user.tokens})
   }catch(e){
    res.status(401).json({status:401,error:e})
   }
}


module.exports={jwtLogin,jwtSignup,validuser,logout}

