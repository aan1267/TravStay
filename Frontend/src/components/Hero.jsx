import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/Hero.css";
import { SearchContext } from "./SearchContext";
import ShimmerEff from "./ShimmerEff";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [alllistings, setAllListings] = useState([]);
  const { searchInput } = useContext(SearchContext);

  const navigate=useNavigate()

   const handleClick = (_id, e) => {
  if (e.target.closest(".swiper-button-prev") ||e.target.closest(".swiper-button-next")){ 
      e.preventDefault();
       e.stopPropagation();
       return; // Ensure no further code is executed after this
     }
   if (e.target.closest(".swiper-slide")) {
      e.stopPropagation(e);
       console.log(e.target.closest(".swiper-slide"))
     navigate(`/listing/${_id}`);
   }
  };

  const getListings = async () => {
    try {
      const res = await axios.get("http://localhost:8080/listing");
      setAllListings(res.data.listings);
      // console.log(res.data.listings)
    } catch (e) {
      console.log("error fetching data", e);
    }
  };

  // console.log(searchInput);
  const filteredListings =
    searchInput === ""
      ? alllistings
      : alllistings.filter((listing) =>
          listing.location.toLowerCase().includes(searchInput.toLowerCase())
        );

  useEffect(() => {
    setTimeout(() => getListings(), 2000);
  }, []);

  return (
    <>
      <div className="container mt-5 pt-2">
        <div className="row mt-5 g-2">
          {filteredListings.length > 0 ? (
            filteredListings.map((val) => {
              let { images, location, price, _id } = val;
              // console.log(val);
              return (
                <div
                  key={_id}
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 g-3"
                >
                  <div className="swiper-container" onClick={(e)=>handleClick(_id,e)}>
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
                          <img className="img-fluid" src={img.url} alt="..." />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="card-body p-1">
                      <p className="fs-6 fw-bold mb-0">{location}</p>
                      <p>&#8377;{price.toLocaleString("en-IN")}/night</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <ShimmerEff />
          )}
        </div>
      </div>
    </>
  );
}
