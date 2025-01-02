const express=require("express")
const imageController=require("../controllers/imageController.js")
const imageRouter=express.Router()
const multer=require("multer")
const {storage}=require("../config/cloudinaryconfig.js")

const upload = multer({storage:storage })
imageRouter.post("/upload-by-link",imageController.uploadByLink)
imageRouter.post("/upload-images",upload.array("photos",7),imageController.uploadImages)

module.exports=imageRouter