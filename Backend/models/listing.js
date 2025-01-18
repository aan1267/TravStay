const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema=new Schema({
    title:{
        type:String,
        require:true,
    },
    description:String,
    images:[{
        url:{type:String,required:true},
       caption:String,
    }],
    price:String,
    location:String,
    country:String,
    category:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const Listing=mongoose.model("Listing",listingSchema)
module.exports=Listing