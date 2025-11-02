const express=require("express")
const {uploadByLink,uploadImages}=require("../controllers/imageController.js")
const upload = require("../middleware/upload-middleware.js")
const imageRouter = express.Router()



imageRouter.post("/upload-by-link",uploadByLink)
imageRouter.post("/upload-images",upload.array("photos",7),uploadImages)

module.exports=imageRouter