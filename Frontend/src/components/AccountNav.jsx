import React from "react"
import {Link,useLocation} from "react-router-dom"
import "../styles/ProfilePage.css"


function AccountNav() {
    // const {pathname}=useLocation()
    
  //  let subpage= pathname.split("/")?.[2]
  //  console.log(subpage)
 
  //  if(subpage === undefined){
  //      subpage = "profile"
  //  }
  
  return (

    <nav className="d-flex justify-content-center gap-2  gap-sm-5 gap-md-5 gap-lg-5  mt-5 pt-5">
      <Link to="/account" className="nav-link">
        <i class="fa-regular fa-user"></i> My Profile
      </Link>
      <Link to="/account/bookings" className="nav-link">
        <i class="fa-solid fa-list"></i> My bookings
      </Link>
      <Link to="/account/places" className="nav-link">
        <i class="fa-solid fa-house-chimney"></i> My accomodate
      </Link>
    </nav>
  );
}

export default AccountNav;
