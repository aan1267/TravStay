const express=require("express")
const bookingsRoute=express.Router()
const {bookings,getbooking}=require("../controllers/BookingsController.js")
const {authenticate}=require("../middleware/auth-middleware.js")

bookingsRoute.post("/",authenticate, bookings)
bookingsRoute.get("/",authenticate, getbooking)

module.exports=bookingsRoute