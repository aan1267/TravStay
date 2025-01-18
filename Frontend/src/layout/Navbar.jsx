import React, { useRef, useState, useEffect, useContext } from "react";
import "../styles/Navbar.css";
import { SearchContext } from "../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaBars, FaSearch } from 'react-icons/fa';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const { username, logout, isAuthenticate,setisAuthenticate} = useAuth();
  // console.log(username)

  const dropdownRef = useRef(null);
  const { setSearchInput } = useContext(SearchContext);
  const navigate = useNavigate();
  
  
  // if( window.location.pathname === "signup"){
  //     setSearchInput("")
  //     setIsOpen(false)
  //   }
  // },[window.location.pathname,setSearchInput])
 

  // !dropdownRef.current.contains(e.target))  detect click happen outside the dropdown
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)  ) {
      setIsOpen(false)
    }
  };
 
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  }, [])

  const toggleDropDown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  };

  return (
    <div className="navbar">
      <div className="container">
      <Link to="/" className="text-decoration-none">
        <div className="header d-flex align-items-center">
          <img className="logo" src="/Travsaty-icon.png" alt="Travstay" />
          <h1>Travstay</h1>
        </div>
      </Link>
      <div>
        {window.location.pathname === "/" && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
              <span>
              <FaSearch />
              </span>
          </div>
        )}
      </div>
      <div className="header-list">
        <p>Explore your home</p>
        <div className="profile-box">
          <button
            className="profile-btn"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleDropDown}
          >
            <span className="profile">
            <FaBars/>
            </span>
            <span>
              {isAuthenticate ? (
                <Avatar className="bg-primary">{username}</Avatar>
              ) : (
                <AccountCircleIcon className="fs-1" />
              )}
            </span>
          </button>
           <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}  ref={dropdownRef} aria-labelledby="dropdownMenuButton">
              <Link to="/login"class="dropdown-item" onClick={()=>setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" class="dropdown-item" onClick={()=>setIsOpen(false)}>
                Signup
              </Link>
              <Link to="/" class="dropdown-item" onClick={handleLogout}>
                Logout
              </Link>
              {isAuthenticate && (
                  <Link to="/account" onClick={()=>setIsOpen(false)} class="dropdown-item">Profile  
                  </Link>
                  )
                }
            </div>
        </div>
      </div>
  </div>
  </div>
  );
}

