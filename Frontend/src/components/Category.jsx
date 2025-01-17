import React, { useState } from "react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "../styles/Category.css";
import { Navigation } from "swiper/modules";
 

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "BeachFront", icon: "fa-umbrella-beach" },
    { name: "Rooms", icon: "fa-bed" },
    { name: "Iconic Cities", icon: "fa-mountain-city" },
    { name: "Mountains", icon: "fa-mountain" },
    { name: "Amazing Pools", icon: "fa-person-swimming" },
    { name: "Trending", icon: "fa-fire" },
    { name: "Lake", icon: "fa-water" },
    { name: "Domes", icon: "fa-igloo" },
    { name: "Arctic", icon: "fa-snowflake"},
    { name: "Bed&BreakFast", icon: "fa-mug-hot"},

  ];

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
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="d-flex flex-column">
                <i className={`fa-solid ${category.icon}`}></i>
                {category.name}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Category;


