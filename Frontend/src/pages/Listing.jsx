import React, { useEffect, useState } from "react";
import axios from "axios";
import { differenceInCalendarDays } from 'date-fns'
import "../styles/Listing.css";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";


function Listing() {
  const [listings, setAllListings] = useState(null);
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [guests, setGuest] = useState("");
  const [Name, setName] = useState("");
  const [redirect,setRedirect]=useState("")
  const { id } = useParams();
  const navigate = useNavigate();


  let numberofNights=0;
   if(checkin && checkout){
     numberofNights=differenceInCalendarDays(new Date(checkin),new Date(checkout))
   }
  const bookthisplace=async()=>{
      const data={
        Name,checkin,checkout,guests,
        price:numberofNights * listings.price,
        listing:listings._id
      }

      let token=localStorage.getItem("usersdatatoken")
     const res=await axios.post("http://localhost:8080/bookings",data,{
      headers:{
        Authorization:token,
      }
     })
     const bookingId=res.data._id
     console.log(bookingId)
     setRedirect(`/account/bookings/${bookingId}`)
  }


  const getAllImages = async() => {
    const res = await axios.get(`http://localhost:8080/listing/${id}`);
    setAllListings(res.data.listing);
    console.log(listings);
  }

  //  const handleshowImages = () => {
  //   navigate(`/listing/${id}/all-photos`, {
  //     state: { images: listings.images },
  //   });
  // };

  //useParams
  useEffect(() => {
    if (id) {
      getAllImages();
    }
    //   console.log(listings);
  }, [id]);

   
  if(redirect){
    return <Navigate to={redirect}/>
  }

  return (
    <>
      {listings ? (
        <div className="container p-4">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-12 mt-5">
              <h1 className="title fw-bold text-nowrap">{listings.title}</h1>
              <ImageContainer listings={listings}/>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xl-8">
                    <h4>
                      <i class="fa-solid fa-location-dot"></i>
                      <span class="location ps-2 fs-4 text-nowrap">
                        {listings.location}
                      </span>
                    </h4>
                    <hr />
                    <h4 class="description">description</h4>
                    <p className="text-wrap p-2 ">{listings.description}</p>
                    <hr />
                  </div>
                  <div className="col-xl-4">
                    <div
                      className="border p-5  w-100 shadow rounded"
                      style={{
                        border: "2px solid grey",
                        boxSizing: "border-box",
                      }}
                    >
                      <div className="price">Price : {listings.price}/night</div>
                      <div className="border border-secondary rounded row mt-4 mx-1">
                        <h6 className="col-6 border border-secondary p-2">
                          CHECKIN
                          <input
                            type="date"
                            className="border-0 mt-2"
                            vale={checkin}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </h6>
                        <h6 className="col-6 border border-secondary p-2">
                          CHECKOUT
                          <input
                            type="date"
                            className="border-0 mt-2"
                            value={checkout}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </h6>
                        <h5 className="fs-6 fw-normal">
                          Number of Guests
                          <input
                            className="border-0"
                            placeholder="1"
                            style={{ outline: "none" }}
                            value={guests}
                            onChange={(e) => setGuest(e.target.value)}
                          />
                        </h5>
                      </div>
                      <h5 className="fs-6 mt-2 mx-2 fw-normal">
                        Your Full Name
                        <input
                          className="p-1 rounded mt-2 w-100 border border-secondary"
                          style={{ outline: "none" }}
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </h5>
                      <button className="login-btn p-2 mt-2" onClick={bookthisplace}>
                        Booking 
                        {checkin && checkout &&(
                            <span>{numberofNights * listings.price}</span>
                        )}
                      </button>
                    </div>
                  </div>
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

export default Listing;
