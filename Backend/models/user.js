const mongoose=require("mongoose")
const {Schema}=mongoose
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
require('dotenv').config()

const UserSchema=new Schema({
    username:{
      type:String,
      require:true,
    },
    email:{
      type:String,
      require:true,
      unique:true,
    },
    password:{
      type:String,
      required:true,
      minlength:6
    },
    tokens:[
      {
         token:{
           type:String,
           required:true,
         }
      }
    ]
    
})


//hash password
UserSchema.pre("save", async function(next){

  if(this.isModified("password") || this.isNew){
  this.password=await bcrypt.hash(this.password,12)
  }
  next()
})

//token create
UserSchema.methods.generateAuthtoken= async function(){
    try{
       let token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{
          expiresIn:"1h" 
       })
       this.tokens=this.tokens.concat({token:token})
       await this.save()
       return token
    }catch(error){
      throw new Error("Error generating token: " + error.message);
    }
}

const User=mongoose.model("User",UserSchema)

module.exports=User