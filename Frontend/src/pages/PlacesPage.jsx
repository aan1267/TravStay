import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/PlacesPage.css";
import PlacesForm from "./PlacesForm";
import axios from "axios";
import AccountNav from "../components/AccountNav";

function PlacesPage() {
  const [userCreatedListing, setUserCreatedListing] = useState([]);
  const [selectedlistingid, setSelectedListingId] = useState(null);

  const token = localStorage.getItem("usersdatatoken");
  const { action } = useParams();


  // console.log(action)
  const getUserListings = async () => {
    const res = await axios.get("/listing/userlisting", {
      headers: {
        Authorization: token,
      },
    });
    console.log(res.data.listings[0].images[0]);
    setUserCreatedListing(res.data.listings);
  };

  const toggleDescription= (e,id) => {
    e.preventDefault();
    e.stopPropagation();
    if(selectedlistingid === id){
      setSelectedListingId(null)
    }else{
      setSelectedListingId(id)
    }
  };

 

  useEffect(() => {
    getUserListings();
  }, [setUserCreatedListing]);

  return (
    <>
      <AccountNav />
      {action !== "new" && (
        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
          <h2>List of all added Places</h2>
          <Link to="/account/places/new" className="add-places-btn">
            <i class="fa-solid fa-plus" /> Add New Places
          </Link>
        </div>
      )}
      <div>
        {userCreatedListing.length > 0 && (
          <div>
            {userCreatedListing.map((userlisting) => {
              return (
                <Link
                  to={`/account/places/${userlisting._id}`}
                  className="user-created-listing"
                >
                  <div className="userListing-container d-flex flex-column flex-sm-row">
                    <div className="listing-img">
                      <img src={`${userlisting.images?.[0]?.url}`} alt="" />
                    </div>
                    <div className="info-para">
                      <h1>{userlisting.title}</h1>
                      <p className="d-none d-md-block">
                        {userlisting.description}
                      </p>
                      <button
                        className="d-md-none add-places-btn border-0"
                        onClick={(e) => toggleDescription(e,userlisting._id)}
                      >
                        show description
                      </button>
                         {
                         selectedlistingid === userlisting._id &&(
                          <p>{userlisting.description}</p>
                        )
                         }
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        {console.log("usercreatedlisting",userCreatedListing)}
        {action === "new" && <PlacesForm userCreatedListing={userCreatedListing} setCreatedListing={setUserCreatedListing} />}
      </div>
    </>
  );
}

export default PlacesPage;
