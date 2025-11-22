const cloudinary = require("cloudinary").v2;

const uploadByLink = async (req, res, next) => {
  try {
    const { link } = req.body;
    const newName = "photo" + Date.now();
    const result = await cloudinary.uploader.upload(link, {
      public_id: "TravStay-images/" + newName,
      folder: "TravStay-images",
    });
    // console.log(result.url)
    res.json({ imageUrl: result.url });
  } catch (e) {
    next(e);
  }
};

const uploadImages = async (req,res,next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ msg: "No files uploaded" });
  }
  try {
    const uploadfiles = req.files.map((f) => f.path); //Cloudinary URLs
    res.status(200).json({ uploadfiles });
  } catch (e) {
    next(e);
  }
};

module.exports = { uploadByLink, uploadImages };
