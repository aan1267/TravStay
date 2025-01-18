import React from "react";
import { differenceInCalendarDays, format } from "date-fns";
import { FaArrowRight, FaCalendarDay } from "react-icons/fa";

function BookingDate({ booking }) {
  return (
    <div>
      {booking && (
        <div className="d-flex gap-2  text-normal flex-column flex-md-row">
          <div className="fs-6">
            Number of Nights :{" "}
            {differenceInCalendarDays(
              new Date(booking.checkout),
              new Date(booking.checkin)
            )}
            <span className="d-none d-md-inline">|</span>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="fs-6">
              <FaCalendarDay  /> : {" "}
              {format(new Date(booking.checkin), "yyyy-MM-dd")}
            </div>
            <FaArrowRight />
            <div className="fs-6">
              <FaCalendarDay /> : {" "}
              {format(new Date(booking.checkout), "yyyy-MM-dd")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingDate;
