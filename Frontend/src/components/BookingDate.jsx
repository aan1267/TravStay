import React from "react"
import { differenceInCalendarDays, format } from "date-fns";

function BookingDate({booking}) {
  return (
    <div>
       {booking && (
        <div className="d-flex gap-2  text-normal flex-column flex-md-row">
        <h2 className="fs-6">
              Number of Nights : {differenceInCalendarDays(
                new Date(booking.checkout),
                new Date(booking.checkin)
              )} <span className="d-none d-md-inline">|</span>
            </h2>
            <div className="d-flex gap-2">
            <h2 className="fs-6">
              <i class="fa-regular fa-calendar-days"></i> :
              {format(new Date(booking.checkin), "yyyy-MM-dd")}
            </h2> 
            <i class="fa-solid fa-arrow-right"></i>
            <h2 className="fs-6">
              <i class="fa-regular fa-calendar-days"></i> :
              {format(new Date(booking.checkout), "yyyy-MM-dd")}
            </h2> 
            </div>
       </div> 
       )}
    </div>
  );
}

export default BookingDate;
