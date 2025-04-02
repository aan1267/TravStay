const express=require("express")
const listingController=require("../controllers/listingController.js")
const listingRouter=express.Router()
const {authenticate}=require("../middleware/authenticate.js")

listingRouter.get("/userlisting",authenticate,listingController.getOwnListing)
listingRouter.get("/:id",listingController.getListingById)
listingRouter.get("/",listingController.getAllListings)
// listingRouter.get("/:id/all-photos",listingController.getAllPhotos)
listingRouter.post("/new",authenticate,listingController.createListing)
listingRouter.get("/userlisting/:id",listingController.getUserSingleListing)
listingRouter.put("/userlisting/edit",authenticate,listingController.updateListing)
listingRouter.delete("/userlisting/:id",listingController.deleteListing)

module.exports=listingRouter