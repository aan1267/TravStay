const express=require("express")
const app=express()
require('dotenv').config()
const connectDB=require("./config/dbconfig.js")
const cors=require("cors")
// const cookieParser=require("cookie-parser")
const  errorHandler = require("./middleware/errorHandler-middleware.js")

const port= process.env.PORT || 8080

// const data=require("./data.js")

//import routes
const listingRoutes=require("./routes/listing-routes.js")
const userRoute = require("./routes/user-routes.js")
const imageRoute = require("./routes/image-routes.js")
const bookingsRoute=require("./routes/bookings-routes.js")

 const allowedOrigin = process.env.NODE_ENV === 'production' 
   ? [process.env.FRONTEND_URL_PROD]
  : [process.env.FRONTEND_URL_DEV]

const corsOptions={
  origin: allowedOrigin, 
  credentials: true,  
}
//third party middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use("/uploads",express.static(__dirname+"/uploads"))

//use routes
app.use("/listing",listingRoutes)
app.use("/jwt",userRoute)
app.use("/api",imageRoute)
app.use("/bookings",bookingsRoute)




connectDB()

// error handling middleware
app.use(errorHandler);

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/insert",async(req,res)=>{
//     await Listing.insertMany(data)
//     console.log("data insert")
// })

app.listen(port,'0.0.0.0',()=>{
     console.log(`server is listen to ${port}`)
    // console.log("server is listen to 8080 port");
})




























 
