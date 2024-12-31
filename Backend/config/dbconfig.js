const mongoose=require("mongoose")
require('dotenv').config()


const Mongo_Url=process.env.MONGO_URL

const connectDB=async()=>{
    try{
        await mongoose.connect(Mongo_Url)
        console.log("connected sucessfully")
    }catch(e){
        console.log(e)
    }
}

module.exports=connectDB

