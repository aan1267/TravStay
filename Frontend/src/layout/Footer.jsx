import React, { useState,useEffect,useCallback} from "react"
import axios from "axios"
 import "../styles/Footer.css"
 
export default function Footer() {
  const [categories,setCategories]=useState([])
  const [activesection,setActiveSection]=useState("popular")

  const handleClick = (section) => {
    setActiveSection(section)
  }
  console.log(activesection)

 const fetchcategories=async()=>{
  const res= await axios.get("http://localhost:8080/categories")
    console.log(res.data);
      setCategories(res.data.categories)
    console.log(res.data)
   }

 useEffect(()=>{
  fetchcategories()
 },[])
  
const rendercontent=useCallback(()=>{
  const categoryData= categories.find(category => category.name.trim().toLowerCase() === activesection.trim().toLowerCase())
  // console.log(categoryData);
  // if(!categoryData){
  //       console.log("none");
  //     }
   if(categoryData){
    const cities=categoryData.cities
      return(
        <div>
         {cities.map((city,index)=>(
                <p key={index}>{city.name}<br/>
                {city.description}</p>
          )
        )}
        </div>
      )
    }
 },[categories,activesection])


return (
    <footer className="footer-custom p-3 mt-5">
      <div className="container">
        <div className="row border-bottom border-secondary">
          <div className="col-sm-4 col-md-8 col-lg-12 col-xl-12">
          <h1 className="fs-5 fw-bold">Inspiration for future getaways</h1>
          <div className="d-flex gap-2 gap-sm-3 gap-lg-5">
          {
          categories.map((category) => (
              <button  className="border-0 bg-transparent pb-2 footer-section" key={category._id} onClick={()=>handleClick(category.name)}>
                <h5 className="fs-6 fs-md-5 fs-lg-4 fs-xl-3 text-secondary">{category.name}</h5>
              </button>))
          }
            </div>
        </div>
      </div>
      <div className="content">
            {rendercontent()}
      </div>
      <div>
        <div className="footer-sec-1 d-flex justify-content-center align-items-center border-top border-secondary gap-4 pt-2">
          <div className="footer-sec d-flex justify-content-center align-items-center">
            <p className="m-auto">English (IN)
              &nbsp;<span>₹INR</span></p>
          </div>
          <div className="social-icon d-flex align-items-center justify-content-center gap-2">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </div>
</footer>
  )
}







