import React, { useRef, useState, useEffect,useContext } from "react"
import "../../style/Navbar.css"
import { SearchContext } from "./SearchContext"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../AuthContext"
import Avatar from '@mui/material/Avatar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

    const {username,logout,isAuthenticate}=useAuth()
    // console.log(username)
  
  const dropdownRef = useRef(null)
  const { setSearchInput } = useContext(SearchContext)
  const navigate=useNavigate()
  
  // useEffect(()=>{
  // if( window.location.pathname === "signup"){
  //     setSearchInput("")
  //     setIsOpen(false)
  //   }
  // },[window.location.pathname,setSearchInput])
  
  //!dropdownRef.current.contains(e.target)) detect click happen outside the dropdown
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)  ) {
      setIsOpen(false)
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  }, [])

  const toggleDropDown = (e) => {
     e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  const handleLogout=()=>{
    console.log("logout")
       logout()
       setIsOpen(false)
  }

  return (
    <div className="navbar">
      <Link to="/">
      <div className="header">
        <img
          className="logo"
          src="/Travsaty-icon.png"
          alt="Travstay"/>
        <h1>Travstay</h1>
      </div>
      </Link>
      <div>
      {window.location.pathname === "/" &&(
         <div className="search-bar">
         <input type="text" placeholder="Search here..." onChange={(e)=> setSearchInput(e.target.value)}/>
         <span>
         <i class="fa-solid fa-magnifying-glass"></i>
         </span>
       </div>
      )}
      </div>
      <div className="header-list">
        <p>Explore your home</p>
        <div className="profile-box">
          <button className="profile-btn" onClick={toggleDropDown}>
            <span className="profile">
              <i class="fa-solid fa-bars"></i>
            </span>
            <span>
            { isAuthenticate ? 
               <Avatar style={{background:"blue"}}>{username}</Avatar>
             : <AccountCircleIcon id="user-icon" style={{ fontSize: 40}}/>}
            </span>
          </button>
          {isOpen && (
            <div className="dropdown" ref={dropdownRef}>
              <ul>
                <li>
                  <button style={{fontWeight:"600"}}  onClick={()=>navigate("/signup")}>Signup</button>
                </li>
                <li>
                   <button onClick={()=>navigate("/login")}>Login</button>
                </li>
                <hr/>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                <li>
                  <button>Help Center</button>
                </li>
                {
                  isAuthenticate && (
                  <li>
                   <button onClick={()=>navigate("/account")}>Profile</button>
                  </li>
                  )
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
