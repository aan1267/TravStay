import React from "react"
import {Link,useLocation} from "react-router-dom"
import "../styles/ProfilePage.css"
import { FaList, FaUser,FaHome } from 'react-icons/fa';


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
         <FaUser/> My Profile
      </Link>
      <Link to="/account/bookings" className="nav-link">
         <FaList/> My bookings
      </Link>
      <Link to="/account/places" className="nav-link">
        <FaHome/> My accomodate
      </Link>
    </nav>
  );
}

export default AccountNav;
