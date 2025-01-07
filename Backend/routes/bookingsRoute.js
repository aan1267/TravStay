const express=require("express")
const bookingsRoute=express.Router()
const BookingsController=require("../controllers/BookingsController.js")
const {authenticate}=require("../middleware/authenticate.js")

bookingsRoute.post("/",authenticate,BookingsController.bookings)
bookingsRoute.get("/",authenticate,BookingsController.getbooking)

module.exports=bookingsRoute