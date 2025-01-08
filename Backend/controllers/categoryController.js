const Category=require("../models/category.js")

const getAllCategories=async(req,res)=>{
    try{
      let categories=await Category.find({})
      res.status(202).json({categories })
    }catch(e){
       res.status(500).json({error:e.message})
    }
}

module.exports={getAllCategories}