import React from 'react'
import "../styles/ProfilePage.css"
import { useAuth } from '../context/AuthProvider'
import PlacesPage from './PlacesPage'
import AccountNav from '../components/AccountNav'
import { useParams } from 'react-router-dom'
import BookingsPage from './BookingsPage'

function ProfilePage() {
  const {fullName,logout ,email}=useAuth()
  let {subpage}=useParams;
  console.log("profilepage",subpage)
  if(subpage === undefined){
    subpage = "profile"
  }
  console.log(fullName)

   return (
     <>
      <AccountNav/>
      {subpage === "profile" &&
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <p className="profile-info"> Logged in as <span className='fw-bold'>{fullName} [{email}]</span></p>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      }
      { subpage === "bookings" &&(
        <BookingsPage />
      )}
      {subpage === "places" &&(
         <PlacesPage/>
      )} 
    </>
  )
 }

 export default ProfilePage