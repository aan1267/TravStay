import React,{useState} from "react";
import "../styles/Listing.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaImage, FaTimes } from "react-icons/fa";


function ImageContainer({listings}) {
    const [showallimages,setShowAllImages]=useState(false)

     const navigate = useNavigate();
    const { id } = useParams();

  console.log(listings)

//   const handleshowImages = () => {
//     navigate(`/listing/${id}/all-photos`, {
//       state: { images: listings.images },
//     })
//   };


if(showallimages){
 return(
   <div className="d-flex justify-content-center">
     <div style={{zIndex:"1000"}} className="position-fixed top-0 p-3 left-0 w-100 h-100 bg-dark text-white overflow-auto">
    {
    listings?.images.map((img,index)=>{
            return(
            <div key={index} className="photos">
            <h3>{img.caption}</h3>
             <img src={img.url} alt="..."/>
            </div>
            )
         })
    }
    <button className="close-photo-btn" onClick={()=>setShowAllImages(false)}><FaTimes/>
    Close Photos</button>
 </div>
   </div>
 )
}
  return (
    <div className="images-container">
     {listings?.images.map((img, index) => {
      return (
        <div
          key={index}
          className={
            index === 0
              ? "full-image"
              : index <= 2
              ? "half-image"
              : "hide-image"
          }
        >
          {/* {console.log(img.caption)} */}
          <img className="img-fluid" src={img.url} alt="image" />
          {/* <p>{img.caption}</p> */}
        </div>
      );
    })}
    <button className="showmore-photos" onClick={()=>setShowAllImages(true)}>
    <FaImage className="fs-6"/>  Show more photos
    </button>
  </div>
   )}


export default ImageContainer;
