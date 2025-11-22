
const errorHandler = (err,req,res,next) => {
    console.log(err.code)
  if(err){
    if(err.code == "LIMIT_FILE_SIZE") {
      return res.status(400).json({ msg: "File too large" });
    }
    if(err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ msg: "Too many files. Max 7 allowed" });
    }
    res.status(err.statusCode || 500).json({
    msg: err.message || "Internal Server Error",
  });
  }
  next();
};

module.exports =  errorHandler