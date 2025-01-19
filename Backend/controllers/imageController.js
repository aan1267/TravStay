const cloudinary = require('cloudinary').v2;

// console.log({ __dirname})
const uploadByLink=async(req,res)=>{
    try{
      const {link}=req.body
      const newName= "photo" + Date.now()
      const result = await cloudinary.uploader.upload(link,{
        public_id:  'TravStay-images/' + newName,
        folder: "TravStay-images"
      })
      // console.log(result.url)
      res.json({imageUrl:result.url})
  }catch(e){
    res.status(500).json({ message:"error during upload by link"});
  }
}



const uploadImages= async(req,res)=>{
    // console.log(req.files)
    let uploadfiles=[]
     try{
       for(let i=0;i<req.files.length;i++){
           const file=req.files[i]
        if(file.path){
           uploadfiles.push(file.path)
          }
        }
         res.status(200).json({ uploadfiles })
         console.log(uploadfiles)
      }catch(e){
            return res.status(500).json({ message: "Error uploading image" })
       }
  }

module.exports={uploadByLink,uploadImages}







       