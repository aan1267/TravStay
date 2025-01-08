const express=require("express")
const app=express()
const connectDB=require("./config/dbconfig.js")
const cors=require("cors")
const cookieParser=require("cookie-parser")
const PORT= process.env.PORT || 8080

// const data=require("./data.js")

//import routes
const listingRoutes=require("./routes/listingRoutes.js")
const categoryRoutes = require("./routes/categoriesRoutes.js")
const userRoute = require("./routes/userRoutes.js")
const imageRoute = require("./routes/imageRoute.js")
const bookingsRoute=require("./routes/bookingsRoute.js")

const allowedOrigin = process.env.NODE_ENV === 'production' 
  ? 'https://www.yoursite.com'
  : 'http://localhost:5173'

//middleware
app.use(cors({
    origin:"http://localhost:5173", 
  credentials: true,  
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
// app.use("/uploads",express.static(__dirname+"/uploads"))

//use routes
app.use("/listing",listingRoutes)
app.use("/categories",categoryRoutes)
app.use("/jwt",userRoute)
app.use("/api",imageRoute)
app.use("/bookings",bookingsRoute)



connectDB()




// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/insert",async(req,res)=>{
//     await Category.insertMany(categories)
//     console.log("data category")
// })


app.listen(PORT,()=>{
    console.log("server is listen to 8080 port");
})




























 
