const multer=require("multer")
const {storage}=require("../config/cloudinaryconfig.js")

const upload = multer({storage:storage })

module.exports = upload