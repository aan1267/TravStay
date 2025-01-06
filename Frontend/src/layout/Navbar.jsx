import React, { useRef, useState, useEffect, useContext } from "react";
import "../styles/Navbar.css";
import { SearchContext } from "../components/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { username, logout, isAuthenticate,setisAuthenticate} = useAuth();
  // console.log(username)

  const dropdownRef = useRef(null);
  const { setSearchInput } = useContext(SearchContext);
  const navigate = useNavigate();


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
    setisAuthenticate(false)
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="header">
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
              <i class="fa-solid fa-magnifying-glass"></i>
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
              <i class="fa-solid fa-bars"></i>
            </span>
            <span>
              {isAuthenticate ? (
                <Avatar style={{ background: "blue" }}>{username}</Avatar>
              ) : (
                <AccountCircleIcon id="user-icon" style={{ fontSize: 40 }} />
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
  );
}

