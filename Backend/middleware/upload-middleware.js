const multer = require("multer");
const { storage } = require("../config/cloudinaryconfig.js");

const upload = multer({
  storage: storage,
  limits: { 
    fileSize:  2 * 1024 * 1024, // 2MB limit
    files: 6 // max 6 page allowed 
},
});

module.exports = upload;
