import React,{useState,useEffect} from "react"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer.jsx"
import { Outlet,useLocation} from "react-router-dom"
import  {SearchProvider} from "../context/SearchProvider.jsx"



export default function LayoutComponent(){
  const [hidefooter ,setHideFooter]=useState(false)
  const location=useLocation()

  useEffect(()=>{
    if(location.pathname.startsWith("/account/")|| location.pathname.startsWith("/account")){
      setHideFooter(true)
    }else{
      setHideFooter(false)
    }
  },[location.pathname])


  return (
    <div className="app-container">
       <SearchProvider>
         <Navbar/> 
         <main className="main-content">
         <Outlet/>
         </main>
         {!hidefooter && <Footer/>}
       </SearchProvider>
    </div>
  )
}