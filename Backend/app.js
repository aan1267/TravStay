const express=require("express")
const app=express()
const connectDB=require("./config/dbconfig.js")
const cors=require("cors")
const cookieParser=require("cookie-parser")

// const data=require("./data.js")

//import routes
const listingRoutes=require("./routes/listingRoutes.js")
const categoryRoutes = require("./routes/categoriesRoutes.js")
const userRoute = require("./routes/userRoutes.js")
const imageRouter=require("./routes/imageRoute.js")


//middleware
app.use(cors({
    origin:'*',  
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
app.use("/api",imageRouter)



connectDB()




// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.get("/insert",async(req,res)=>{
//     await Category.insertMany(categories)
//     console.log("data category")
// })


app.listen(8080,()=>{
    console.log("server is listen to 8080 port");
})




























 
