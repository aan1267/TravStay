import React, { useState } from "react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "../styles/Category.css";
import { Navigation } from "swiper/modules";
import { TbClearAll } from "react-icons/tb";
import { FaBed, FaCity, FaFire, FaHome, FaIgloo, FaMountain, FaMugHot, FaUmbrellaBeach, FaWater, FaWindowMaximize } from "react-icons/fa";
 

const Category = ({selectedCategory}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <TbClearAll /> },
    { name: "Amazing Views", icon: <FaWindowMaximize /> },
    { name: "Rooms", icon: <FaBed/> },
    { name: "Iconic Cities", icon: <FaCity/>  },
    { name: "Entire place", icon: <FaHome />},
    { name: "Lake", icon: <FaWater /> },
    { name: "BeachFront", icon: <FaUmbrellaBeach /> },
    { name: "Trending", icon: <FaFire /> },
    { name: "Domes", icon: <FaIgloo /> },
    { name: "Bed&BreakFast", icon:<FaMugHot /> },
    { name: "Mountains", icon: <FaMountain /> },
  ];

  const handleCategory=(category)=>{
     selectedCategory(category)
  }

  return (
    <div
       className="category-component container-fluid position-fixed mt-5 py-3 shadow"
     >
    <div className="container mt-5">
      <Swiper
        slidesPerView={4} 
        loop={true} 
        breakpoints={{
          320:{
            slidesPerView: 3, 
          },
          460:{
            slidesPerView: 4, 
          },
          769:{
              slidesPerView: 6, 
            },
          1024: {
            slidesPerView:7, 
          },
        }}
        modules={[Navigation]}
        >
       {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <button
              className={`custom-style ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={()=>{
                setActiveCategory(category.name)
                handleCategory(category.name)
              }}
            >
              <div className="d-flex flex-column">
                <span className="fs-4">{category.icon}</span>
                {category.name}
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Category;