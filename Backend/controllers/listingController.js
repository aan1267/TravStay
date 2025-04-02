const Listing = require("../models/listing.js");

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.status(202).json({ listings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getListingById = async (req, res) => {
  try {
    const { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ message: "Listing Not Found" });
    }
    res.json({ listing });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// const getAllPhotos = async (req, res) => {
//   try {
//     const listingId = req.params.id;
//     let listing = await Listing.findById(listingId);

//     if (!listing) {
//       return res.status(404).json({ message: "Listing Not Found" });
//     }

//     res.json({ images: listing.images });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const createListing = async (req, res) => {
  try {
    const { title, description, images, location, country, price,category} = req.body;

    if (!title || !description || !images || !location || !country || !price) {
      res.status(400).json({ error: "all field are required" });
    }
    const data = { title, description, images, location, country, price ,category};
    console.log("img",images)
    const newListing = new Listing(data)
    newListing.owner = req.userId
    await newListing.save();
    console.log(newListing);
    res.status(201).json({ status: 201, newListing });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
const getOwnListing = async (req, res) => {
  try {
    const userid = req.userId;
    //  console.log(userid)
    let listings = await Listing.find({ owner: userid });
    if (!listings) {
      res.status(404).json({ error: "Listing Not Found" });
    }
    res.json({ listings });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getUserSingleListing = async (req, res) => {
  try {
    const { id } = req.params;
    const userlisting = await Listing.findById(id);
    res.json({ userlisting });
  } catch (e) {
    res.json({ error: e.message });
  }
};

const updateListing = async(req,res) => {
  const userid = req.userId;
  console.log(userid)
  const {id,title, description, images, location, country, price,category} = req.body
  const listing=await Listing.findById(id)
  if(userid.toString() === listing.owner.toString()){
    listing.set({
      title, description, images, location, country, price,category 
    })
    await listing.save()
    res.status(200).json({message:"Listing Updated Successfully"})
  }
}

const deleteListing =async(req,res)=>{
   try{
    const {id}= req.params;
   const deleteListing = await Listing.findByIdAndDelete(id)
    res.json({message:"deleted sucessfully"})
   }catch(e){
     console.error(e)
     res.status(500).json({message:"Internal server error"})
   }
}


module.exports = {
  getAllListings,
  getListingById,
  createListing,
  getOwnListing,
  getUserSingleListing,
  updateListing,
  deleteListing,
};
