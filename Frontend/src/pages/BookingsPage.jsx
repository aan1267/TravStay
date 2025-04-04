import React, { useState, useEffect } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";
import BookingDate from "../components/BookingDate";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    try {
      let token = localStorage.getItem("usersdatatoken");
      const res = await axios.get("/bookings", {
        headers: {
          Authorization: token,
        },
      });
      setBookings(res.data);
      console.log(res.data);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <>
      <AccountNav />
          <div>
          {bookings.length > 0 &&
            bookings.map((booking) => (
              <Link to={`/account/bookings/${booking._id}`} className="text-black text-decoration-none">
                  <div className="d-flex justify-content-between rounded m-5 flex-column flex-sm-row" style={{backgroundColor:"#F5F5F5"}}>
                <div className="listing-img">
                  <img src={booking?.listingid?.images?.[0]?.url} alt="" />
                </div>
                <div className="flex-grow-1 p-3" >
                  <h2 className="fs-6">{booking?.listingid?.title}</h2>
                  <BookingDate booking={booking}/>
                   <div className="fw-bold fs-6">
                   Total Price: {booking?.listingid?.price}
                   </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
    </>
  );
}

export default BookingsPage;
