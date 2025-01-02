const express=require("express")
const categoryRoute=express.Router()
const categoryController=require("../controllers/categoryController.js")

categoryRoute.get("/",categoryController.getAllCategories)

module.exports=categoryRoute