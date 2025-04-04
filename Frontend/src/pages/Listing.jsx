import React, { useEffect, useState } from "react";
import axios from "axios";
import { differenceInCalendarDays } from 'date-fns'
import "../styles/Listing.css";
import { Navigate,  useNavigate, useParams } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";
import { FaMapMarkerAlt  } from "react-icons/fa";


function Listing() {
  const [listings, setAllListings] = useState(null);
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [guests, setGuest] = useState("");
  const [Name, setName] = useState("");
  const [redirect,setRedirect]=useState("")
  const {id }= useParams();
  const navigate = useNavigate();
  let token=localStorage.getItem("usersdatatoken")

  let numberofNights=0;
   if(checkin && checkout){
     numberofNights=differenceInCalendarDays(new Date(checkin),new Date(checkout))
   }
  const bookthisplace=async(e)=>{
    e.preventDefault()
     try{
      const data={
        Name,checkin,checkout,guests,
        price:numberofNights * listings.price,
        listing:listings._id
      }
    const res=await axios.post("/bookings",data,{
      headers:{
        Authorization:token,
      }
     })
    console.log(res.data.newbooking._id)
    const bookingId=res.data.newbooking._id
     setRedirect(`/account/bookings/${bookingId}`)
     }catch(e){
      if(e.response.status === 401){
       console.log("Unauthorized,redirecting to login...");
       navigate("/login")
      }else{
        console.error("error",e.message)
      }
     }
  }


  const getAllImages = async() => {
    const res = await axios.get(`/listing/${id}`);
    setAllListings(res.data.listing);
    console.log(listings);
  }

  //  const handleshowImages = () => {
  //    navigate(`/listing/${id}/all-photos`, {
  //      state: { images: listings.images },
  //    });
  //  };

  //useParams
  useEffect(() => {
    if (id) {
      getAllImages();
    }
    //   console.log(listings);
  }, [id]);

   
  if(redirect){
    return <Navigate to={redirect} />
  }


  return (
    <>
      {listings ? (
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 mt-5">
              <h1 className="title fw-bold text-nowrap ms-4">{listings.title}</h1>
              <ImageContainer listings={listings}/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-8 col-xl-8">
                    <h4>
                      <FaMapMarkerAlt />
                      <span class="location ps-2 fs-4 text-nowrap">
                        {listings.location}
                      </span>
                    </h4>
                    <hr />
                    <h4 class="description">description</h4>
                    <p className="text-wrap p-2 ">{listings.description}</p>
                    <hr />
                  </div>
                  <form className="col-xl-4 col-lg-4 col-sm-12 col-md-12" onSubmit={(e)=>bookthisplace(e)}>
                    <div
                      className="border p-5 w-100 shadow rounded"
                      style={{
                        border: "2px solid grey",
                        boxSizing: "border-box",
                      }}
                    >
                      <div className="price">Price : {listings.price}/night</div>
                      <div className="row border border-secondary rounded mt-4">
                        <div className="col col-md-6 border border-secondary p-2 border-box">
                           <label htmlFor="checkin">CHECKIN :</label>
                          <input
                            type="date"
                            id="checkin"
                            className="form-control border-0 outline-0"
                            value={checkin}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>
                        <div className="col col-md-6 border-top-0 border-bottom border-secondary p-2">
                        <label htmlFor="checkout"> CHECKIN :</label>
                          <input
                            type="date"
                            id="checkout"
                            className="form-control border-0"
                            value={checkout}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                        <div className="fs-6 p-2">
                         <label htmlFor="guest">Number of Guests:</label>
                          <input
                            className="form-control"
                            type="number"
                            id="guest"
                            placeholder="1"
                            min="1" 
                            max="10"
                            value={guests}
                            onChange={(e) => setGuest(e.target.value)}
                          />
                        </div>
                      <div className="my-2">
                        <h1 className="fs-6 fw-normal">Your Full Name</h1>
                        <input
                          className="form-control rounded w-100"
                          style={{ outline: "none" }}
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                      <button className="login-btn p-2 mt-2">
                        Booking 
                        {checkin && checkout &&(
                            <span>{numberofNights * listings.price}</span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <h1>map</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "not found"
      )}
    </>
  );
}

export default Listing
