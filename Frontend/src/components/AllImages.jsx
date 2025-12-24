// import React from 'react'
// import { useLocation, useNavigate,useParams } from 'react-router-dom'
// import "../styles/Listing.css"

// function AllImages() {
//   const location=useLocation()
//   console.log(location)
//   const {id}=useParams()
//   console.log(location)
//   const {images}=location.state

// //   const navigate=useNavigate()
//   const handleClose=()=>{
//     navigate(`/listing/${id}`) 
//    //  navigate(`/account/bookings/${id}`)
//    }
//   return (
//     <>
//      <div>
//         {
//         images.map((img,index)=>{
//                 return(
//                 <div key={index} className="photos">
//                 <h3>{img.caption}</h3>
//                  <img src={img.url} alt="images" />
//                 </div>
//                 )
//              })
//         }
//         <button className="close-photo-btn" onClick={()=>handleClose()}><i class="fa-solid fa-xmark"></i>
//         Close Photos</button>
//      </div>
//      </>
//   )
// }

// export default AllImages