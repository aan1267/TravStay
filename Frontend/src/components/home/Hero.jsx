import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import "../../style/Hero.css"
import { SearchContext } from './SearchContext'


export default function Hero() {
  const { searchInput } = useContext(SearchContext)
  const [alllistings, setAllListings] = useState([]);

  // const [listings, setListings] = useState([
  //   {
  //     title: "",
  //     description: "",
  //     images: [],
  //     price: "",
  //     country: "",
  //     location: "",
  //   },
  // ]);

  const getListings = async () => {
    try {
      const res = await axios.get("http://localhost:8080/listing");
      setAllListings(res.data.listings)
      // console.log(res.data.listings)
    } catch (e) {
      console.log("error fetching data", e);
    }
  };
  // console.log(searchInput);
  const filteredListings = searchInput === "" ? alllistings 
    : alllistings.filter(listing =>  listing.location.toLowerCase().includes(searchInput.toLowerCase())
      )
    
  useEffect(() => {
    getListings()
  }, [])

  return (
    <>
    <div className=" card-container">
       {
        filteredListings.length > 0 ? 
        filteredListings.map((val) => {
          let { images, location, price, _id } = val;
          // console.log(val);
          return (
            <div className="card">
              <div
                id={`carouselExampleControls${_id}`}
                className="carousel slide"
              >
                <div className="carousel-inner">
                  {images.map((img, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img src={img.url} alt={img.alt} />
                    </div>
                  ))}

                  <a
                    class="carousel-control-prev"
                    href={`#carouselExampleControls${_id}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#carouselExampleControls${_id}`}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div class="card-body">
                  <p class="card-text loca">{location}</p>
                  <p class="card-text">{price}</p>
                </div>
              </div>
            </div>
          )
         }) :<p>Not Found</p>
      }
    </div>
    </>
  )
}
