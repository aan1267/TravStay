import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../components/AccountNav";
import DeleteIcon from "@mui/icons-material/Delete";

function PlacesForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [photosLink, setPhotosLink] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const UserListingSingle = async () => {
      if (!id) {
        return;
      }
      let { data } = await axios.get(
        `/listing/userlisting/${id}`
      );
      console.log("img", data.userListing);
      let { title, description, images, location, price, country } =
        data.userlisting;
      setTitle(title);
      setDescription(description);
      setAddPhotos(images);
      setLocation(location);
      setPrice(price);
      setCountry(country);
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

  const uploadPhotos = async (env) => {
    const files = env.target.files;
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
      <div className="container my-5">
        <form onSubmit={(e) => addNewListing(e)}>
          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="description">Description</label>
              <textarea
                rows="5"
                cols="6"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
          <label htmlFor="photos">Photos</label>
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
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Pune, India"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="1200"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                placeholder="India"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <button
            className="add-places-btn border-0 px-5 py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PlacesForm;






     