const express=require("express")
const app=express()
const mongoose=require("mongoose")
require('dotenv').config()
const data=require("./data.js")
const Listing= require("./models/listing.js")
const Category=require("./models/category.js")
const cors=require("cors")

app.use(cors())
const Mongo_Url=process.env.MONGO_URL;


main()
.then(()=>console.log("connected sucessfully"))
.catch((e)=>console.log(e))
async function main(){
    await mongoose.connect(Mongo_Url)
}

app.get("/",(req,res)=>{
    res.send("hello")
})
// const categories = [
//     {
//       name:"popular",
//       cities: [
//         { name: "Canmore", description: "Chalet rentals" },
//         { name: "Benalmádena", description: "Beach house rentals"},
//         { name: " Marbella", description: "Beachfront rentals" },
//         { name: " Prescott", description: " Cottage rentals"},
//         { name: "Scoddal", description: "Pet-friendly rentals"},
//         { name: "Mijas", description: "Flat rentals"},
//       ]
//     },
//     {
//       name:"arts and culture",
//       cities: [
//         { name: "Phoenix", description: "Rentals with pools"},
//         { name: "Washington", description: "Beach house rentals" },
//         { name: "Hot Springs", description: "Lakehouse rentals" },
//         { name: "Prague", description: "Holiday rentals" },
//         { name: "San Francisco", description: "Beach house rentals" },
//         { name: "Dublin", description: "Cottage rentals" },
//       ]
//     },
//     {
//         name:"outdoors",
//         cities: [
//             { name: "Canmore", description: "Chalet rentals" },
//             { name: "Benalmádena", description: "Beach house rentals",},
//             { name: " Marbella", description: "Beachfront rentals" },
//             { name: " Prescott", description: " Cottage rentals"},
//             { name: "Scoddal", description: "Pet-friendly rentals"},
//             { name: "Mijas", description: "Flat rentals"},
//         ]
//     },
//     {
//         name:"mountains",
//         cities: [
//           { name: "Dauphin Island", description: "Chalet rentals"},
//           { name: "Moonta Bay", description: "Beach house rentals"},
//           { name: "Marbella", description: "house rentals"},
//           { name: "Prescott", description: "Cottage rentals"},
//           { name: "Bruny Island", description: "flat rentals"},
//           { name: "Scoddal", description: "Pet friendly"},
//         ]
//       },
//       {
//         name:"beach",
//         cities: [
//         { name: "Phoenix", description: "Rentals with pools"},
//         { name: "Washington", description: "Beach house rentals" },
//         { name: "Hot Springs", description: "Lakehouse rentals" },
//         { name: "Prague", description: "Holiday rentals" },
//         { name: "San Francisco", description: "Beach house rentals" },
//         { name: "Dublin", description: "Cottage rentals" },
//         ]
//     }
//   ];

app.get("/insert",async(req,res)=>{
    await Category.insertMany(categories)
    console.log("data category")
})

app.get("/listing",async(req,res)=>{
    let listings=await Listing.find({})
    res.status(202).json({listings})
    // res.send("done!")
})

app.get("/categories",async(req,res)=>{
    let categories=await Category.find()
    res.status(202).json({categories})
})

app.listen(8080,()=>{
    console.log("server is listen to 8080 port");
})