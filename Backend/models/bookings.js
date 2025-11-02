const mongoose=require("mongoose")
const {Schema}=mongoose

const BookingsSchema=new Schema({
    name:{type:String,required:true},
    checkin:{type:Date,required:true},
    checkout:{type:Date,required:true},
    guests:{type:Number},
    price:Number,
    user:{type:Schema.Types.ObjectId, ref: "User", required:true},
    listingid:{type:Schema.Types.ObjectId,ref:"Listing",required:true,},
})

const Bookings=mongoose.model("Booking",BookingsSchema)
module.exports=Bookings