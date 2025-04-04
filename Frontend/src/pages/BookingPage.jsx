import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import BookingDate from "../components/BookingDate";
import ImageContainer from "../components/ImageContainer";
import { FaMapMarkerAlt } from "react-icons/fa";

function BookingPage() {
  const [booking, setbooking] = useState(null);
  const { id } = useParams();
  console.log(id);
  
  const getBooking = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = await axios.get("/bookings", {
      headers: {
        Authorization: token,
      },
    });
    const foundBooking = res.data.find(({ _id }) => _id === id);
    setbooking(foundBooking);
  };

  useEffect(() => {
    if (id) {
      getBooking();
    }
  }, [id]);

  return (
    <>
      <div className="container mt-5 p-5">
          <h1 className="fs-5">{booking?.listingid?.title}</h1>
        <h4>
           <FaMapMarkerAlt />
          <span class="location ps-2 text-nowrap">
            {booking?.listingid?.location}
          </span>
        </h4>
        <div className="d-flex justify-content-between p-3 mb-4 rounded flex-column flex-md-row" style={{backgroundColor:"#F5F5F5"}}>
            <div>
            <h2 className="fs-6 fs-md-4 text-nowrap
            ">your Booking Information</h2>
            <BookingDate booking={booking}/>
            </div>
            <div className="text-white p-2 p-md-3 rounded" style={{backgroundColor:"#53b1eb"}}>
                   Total Price : {booking?.listingid?.price}
            </div>
        </div>
        <ImageContainer listings={booking?.listingid}/>
      </div>
    </>
  );
}

export default BookingPage;
