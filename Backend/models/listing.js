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
        caption:{type:String},
    }],
    price:String,
    location:String,
    country:String,
})

const Listing=mongoose.model("Listing",listingSchema)
module.exports=Listing