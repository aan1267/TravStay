import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/Hero.css";
import { SearchContext } from "../context/SearchProvider.jsx";
import ShimmerEff from "./ShimmerEff";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Category from "./Categories.jsx";
import {FiFrown} from "react-icons/fi";

export default function Hero() {
  const [alllistings, setAllListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Amazing Views");
  const { searchInput } = useContext(SearchContext);
  const [filteredListings, setfilteredListings] = useState([])

  const navigate = useNavigate();

  const handleSelectedCategory = (data) => {
    console.log("get  selected category from Categories.jsx child", data);
    setSelectedCategory(data);
  };

  const handleClick = (_id, e) => {
    if (
      e.target.closest(".swiper-button-prev") ||
      e.target.closest(".swiper-button-next")
    ) {
      e.preventDefault();
      e.stopPropagation();
      return; // Ensure no further code is executed after this
    }
    if (e.target.closest(".swiper-slide")) {
      e.stopPropagation(e);
      console.log(e.target.closest(".swiper-slide"));
      navigate(`/listing/${_id}`);
    }
  };

  const getListings = async () => {
    try {
      const res = await axios.get("/listing");
      setAllListings(res.data.listings);
      setIsloading(false);
      // console.log(res.data.listings)
    } catch (e) {
      console.log("error fetching data", e);
    }
  };

  // console.log(searchInput);

  useEffect(() => {
    const filteredListings = alllistings.filter((listing) =>
      searchInput === ""
        ? selectedCategory === "All" || listing.category === selectedCategory  
        : listing.location.toLowerCase().includes(searchInput.toLowerCase())  
    );
    setfilteredListings(filteredListings);
  }, [alllistings, searchInput, selectedCategory]);

  const fcount = filteredListings.length;

  useEffect(() => {
    setTimeout(() => getListings(), 1000);
  }, []);

  return (
    <>
      <Category selectedCategory={handleSelectedCategory}  />
      <div className="listi container  mt-5">
         <div className="row">
        {fcount > 0 ? (
          filteredListings.map((val) => {
            let { images, location, price, _id } = val;
            // console.log(val);
            return (
              <div
                key={_id}
                className="col-12 col-sm-12 col-md-6 col-lg-4 g-2 col-xl-3"
              >
                <div
                  className="swiper-container"
                  onClick={(e) => handleClick(_id, e)}
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index} className="carousel-inner">
                        <img className="img-fluid" src={img.url} alt="img" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="card-body p-1">
                    <p className="fs-6 fw-bold mb-0">{location}</p>
                    <p>&#8377;{price.toLocaleString("en-IN")}/night</p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          // <ShimmerEff />
          searchInput ? <h1 className="text-center"><FiFrown size={100}/> No Listing Found</h1> : <ShimmerEff />
        )}
        </div>
      </div>
    </>
  );
}
