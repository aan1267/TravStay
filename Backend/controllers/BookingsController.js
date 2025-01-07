const Bookings=require("../models/bookings.js")

const bookings=async(req,res)=>{
    try{
    const userid=req.userId
    console.log(userid)
    const {checkin,guests,checkout,Name,price,listing}=req.body
    const newbooking=new Bookings({
        name:Name,
        checkin:checkin,
        checkout:checkout,
        numberofguests:guests,
        price:price,
        listingid:listing,
        user:userid
    })
    console.log(newbooking)
    await newbooking.save()
    res.status(200).json({newbooking})
    }catch(e){
        res.status(500).json({error:e})
    }
  }

  const getbooking=async(req,res)=>{
    try{
        const userid = req.userId
        console.log("id",userid)
        res.json(await Bookings.find({user:userid}).populate("listingid")) 
    }catch(e){
     res.status(500).json({error:"server error",e})
    }
  }

  module.exports={bookings,getbooking}