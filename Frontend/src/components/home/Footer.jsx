import React, { useState,useEffect,useCallback} from "react"
import axios from "axios"
import "../../style/Footer.css"
 
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
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h2>Inspiration for future getaways</h2>
          <div className="additional-content">
          {
          categories.map((category) => (
              <button key={category._id} onClick={()=>handleClick(category.name)}>
                <h5>{category.name}</h5>
              </button>))
          }
            </div>
        </div>
      </div>
      <div class="content">
         {rendercontent()}
      </div>
      <div>
        <div className="footer-sec-1">
          <div className="footer-sec">
            <p>English (IN)</p>
            <p>₹INR</p>
          </div>
          <div className="social-icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}







