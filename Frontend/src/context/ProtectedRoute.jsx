import React from 'react'
import { useAuth } from  "./AuthContext"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoute() {
    const {isAuthenticate}=useAuth()

    if(!isAuthenticate){
      return <Navigate to="/login" replace/>
    }
   return <Outlet/>
  }
export default ProtectedRoute