const express=require("express")
const {getOwnListing,getListingById,getAllListings,createListing,getUserSingleListing,updateListing,deleteListing}=require("../controllers/listingController.js")
const listingRouter=express.Router()
const {authenticate}=require("../middleware/auth-middleware.js")

listingRouter.get("/userlisting",authenticate, getOwnListing)
listingRouter.get("/:id", getListingById)
listingRouter.get("/", getAllListings)
// listingRouter.get("/:id/all-photos",listingController.getAllPhotos)
listingRouter.post("/new",authenticate,createListing)
listingRouter.get("/userlisting/:id",getUserSingleListing)
listingRouter.put("/userlisting/edit",authenticate,updateListing)
listingRouter.delete("/userlisting/:id",deleteListing)

module.exports=listingRouter