import React, { useRef, useState, useEffect,useContext } from "react"
import "../../style/Navbar.css"
import { SearchContext } from "./SearchContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)
  const { setSearchInput } = useContext(SearchContext)

  //!dropdownRef.current.contains(e.target)) detect click happen outside the dropdown
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  }, []);

  const toggleDropDown = (e) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="header">
        <img
          className="logo"
          src="/Travsaty-icon.png"
          alt="Travstay"
        />
        <h1>Travstay</h1>
      </div>
      <div>
      <div className="search-bar">
      <input type="text" placeholder="Search here..." onChange={(e)=> setSearchInput(e.target.value)}/>
      <span>
      <i class="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
      </div>
      <div className="header-list">
        <p>Explore your home</p>
        <div className="profile-box">
          <button className="profile-btn" onClick={toggleDropDown}>
            <span className="profile">
              <i class="fa-solid fa-bars"></i>
            </span>
            <span>
              <i class="fa-solid fa-circle-user" id="user-icon"></i>
            </span>
          </button>
          {isOpen && (
            <div className="dropdown" ref={dropdownRef}>
              <ul>
                <li>
                  <button style={{fontWeight:"600"}}>Signup</button>
                </li>
                <li>
                  <button>Login</button>
                </li>
                <hr/>
                <li>
                  <button>Logout</button>
                </li>
                <li>
                  <button>Help Center</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
