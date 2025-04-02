import React, { useState, useEffect } from "react";
import { Navigate,useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../components/AccountNav";
import DeleteIcon from "@mui/icons-material/Delete";

function PlacesForm({userCreatedListing,setCreatedListing}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [category,setSelectCategory]=useState("")
  const [addPhotos, setAddPhotos] = useState([]);
  const [photosLink, setPhotosLink] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

  const categories = [
    "BeachFront",
    "Rooms", 
    "Iconic Cities", 
    "Mountains",
    "Amazing Views",
    "Trending",
     "Lake", 
    "Domes", 
    "Entire place", 
   "Bed&BreakFast",
  ]; 
  {console.log("usercreatedlisting",userCreatedListing)}
  
  useEffect(() => {
    const UserListingSingle = async () => {
      if (!id) {
        return;
      }
      let { data } = await axios.get(
        `/listing/userlisting/${id}`
      );
      console.log("img", data.userListing);
      let { title, description, images, location, price, country,category } =
        data.userlisting;
      setTitle(title);
      setDescription(description);
      setAddPhotos(images);
      setLocation(location);
      setPrice(price);
      setCountry(country);
      setSelectCategory(category)
    };
    UserListingSingle();
  }, [id]);

  const addNewListing = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      images: addPhotos,
      location: location,
      price: price,
      country: country,
      category :category
    };
    console.log(data);
    let token = localStorage.getItem("usersdatatoken");
    if (id) {
      //update
      await axios.put(
        "http://localhost:8080/listing/userlisting/edit",
        { id, ...data },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      //new listing
      const res = await axios.post("http://localhost:8080/listing/new", data, {
        headers: {
          Authorization: token,
        },
      });
    }
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to="/account/places" />;
  }

  const addPhotosByLink = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/api/upload-by-link", {
      link: photosLink,
    });
    console.log("link", res.data);
    let { imageUrl } = res.data;
    console.log(imageUrl);
    setAddPhotos((prev) => [...prev, { url: imageUrl, caption: "" }]);
    setPhotosLink("");
  };

  console.log(addPhotos);

  const handledeleteimages = (e, link) => {
    e.preventDefault();
    setAddPhotos([...addPhotos.filter((photo) => photo !== link)]);
  };
 
  console.log("get",setCreatedListing)
  const handleDeleteListing = async(id)=>{
    await axios.delete(`/listing/userlisting/${id}`)
    console.log(id)
    const updatedListings= userCreatedListing?.filter(listing => listing.id !== id )
    if(setCreatedListing){
      setCreatedListing(updatedListings)
    }
    navigate("/account/places");
  }
  
 

  const uploadPhotos = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    console.log({ files });
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    const res = await axios.post(
      "http://localhost:8080/api/upload-images",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    let fileUrl = res.data.uploadfiles.join("");
    setAddPhotos((prev) => {
      return [...prev, { url: fileUrl, caption: "" }];
    });
  };
  return (
    <>
      <AccountNav />
      <div className="container my-5 flex">
        <form onSubmit={(e) => addNewListing(e)}>
          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="title" class="form-label">Title</label>
              <input
                type="text"
                placeholder="title, for example: My lovely apt"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="description" class="form-label">Description</label>
              <textarea
                rows="5"
                cols="6"
                placeholder="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
          <label htmlFor="photos" class="form-label">Photos</label>
            <div className="col-12 d-flex align-items-center">
              <div className="photos-link flex-grow-1">
                <input
                  type="text"
                  id="photos"
                  placeholder="Add using a link ...jpg"
                  value={photosLink}
                  onChange={(e) => setPhotosLink(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="photos-link">
              <button className="p-1" onClick={addPhotosByLink}>add&nbsp;photo</button>
              </div>
            </div>
          </div>
    

          <div className="row mb-3">
            <div className="col-12 p-2 d-flex flex-wrap align-items-center gap-3">
              {addPhotos.length > 0 &&
                addPhotos.map((link) => (
                  <div className="upload-photos position-relative">
                    <img src={link.url} alt="uploaded" className="img-fluid" />
                    <div className="delete-photo position-absolute bottom-0 end-0 p-2">
                      <button
                        onClick={(e) => handledeleteimages(e, link)}
                        className="btn btn-danger"
                      >
                        <DeleteIcon/>
                      </button>
                    </div>
                  </div>
                ))}
              <label className="border border-secondary p-5 rounded">
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={uploadPhotos}
                />
                <i className="fa-solid fa-cloud-arrow-up"></i> Upload
              </label>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="location" class="form-label">Location</label>
              <input
                type="text"
                placeholder="Pune, India"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price" class="form-label">Price</label>
              <input
                type="number"
                placeholder="1200"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="country" class="form-label">Country</label>
              <input
                type="text"
                placeholder="India"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="Category" className="form-label">Category</label>
              <select className="form-select border p-1 w-100" onChange={(e)=>setSelectCategory(e.target.value)}id="Category">
              <option value="">{id ? category :"select category"}</option>
              { categories.map((item,index)=>(
                  <option key={index} value={item}>{item}</option>
              ))}
              </select>
              <h1>{console.log(category)}</h1>
            </div>
          </div>

          <button
            className="add-places-btn border-0 px-5 py-3"
            type="submit"
          >
            Submit
          </button>
          
        </form>
        <button
            className="add-places-btn border-0 px-5 py-3 mt-2"
            onClick={()=>handleDeleteListing(id)}
          >
            Delete
        </button>
      </div>
    </>
  );
}

export default PlacesForm;








     