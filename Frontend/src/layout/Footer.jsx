import React,{useState,useEffect,useCallback} from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  // const [categories,setCategories]=useState([])
  // const [activesection,setActiveSection]=useState("popular")

  // const handleClick = (section) => {
  //   setActiveSection(section)
  // }
  // console.log(activesection)

  //  const fetchcategories=async()=>{
  //   const res= await axios.get("/categories")
  //     console.log(res.data);
  //       setCategories(res.data.categories)
  //     console.log(res.data)
  //    }

  //  useEffect(()=>{
  //   fetchcategories()
  //  },[])

  // const rendercontent=useCallback(()=>{
  //   const categoryData= categories.slice(0,2).find(category => category.name.trim().toLowerCase() === activesection.trim().toLowerCase())
  //   // console.log(categoryData);
  //   // if(!categoryData){
  //   //       console.log("none");
  //   //     }
  //    if(categoryData){
  //     const cities=categoryData.cities
  //       return(
  //         <div>
  //          {cities.map((city,index)=>(
  //                 <p key={index}><strong>{city.name}</strong><br/>
  //                 {city.description}</p>
  //               )
  //             )}
  //         </div>
  //       )
  //     }
  //  },[categories,activesection])

  //   return (
  //     <footer className="footer-custom p-3 mt-5">
  //       <div className="container">
  //         <div className="row">
  //           {/* <div className="d-flex gap-2 gap-sm-3 gap-lg-5"> */}
  //           {/* {
  //           categories.slice(0,2).map((category) => (
  //               <button  className="border-0 bg-transparent pb-2 footer-section" key={category._id} onClick={()=>handleClick(category.name)}>
  //                 <h5 className="fs-6 fs-md-5 fs-lg-4 fs-xl-3 text-secondary">{category.name}</h5>
  //               </button>))
  //           } */}
  //           <div className="col-sm-12 border-bottom border-secondary col-md-12 col-lg-4 col-xl-4 py-3">
  //             <h1 className="fs-6">Support</h1>
  //             <ul class="list-unstyled d-flex flex-column gap-2">
  //               <li>Help Center</li>
  //               <li>Disability support</li>
  //               <li>Cancellation options</li>
  //               <li>Report neighbourhood concern</li>
  //             </ul>
  //           </div>
  //           <div className="col-sm-12  border-bottom border-secondary  col-md-12 col-lg-4 col-xl-4 py-3">
  //           <h1 className="fs-6">Hosting</h1>
  //           <ul class="list-unstyled d-flex flex-column gap-2">
  //               <li>Community forum</li>
  //               <li>Hosting responsibly</li>
  //               <li>Join a free Hosting class</li>
  //               <li>Find a co-host</li>
  //           </ul>
  //           </div>
  //           <div className="col-sm-12 border-bottom border-secondary col-md-12 col-lg-4 col-xl-4 py-3">
  //           <h1 className="fs-6">Travstay</h1>
  //           <ul class="list-unstyled d-flex flex-column gap-2">
  //             <li>Newsroom</li>
  //             <li>New features</li>
  //             <li>Manage your reservations</li>
  //             <li>Travstay.org emergency stays</li>
  //           </ul>
  //           </div>
  //           <div>
  //         </div>
  //       </div>
  //         {/* <div className="content">
  //             {rendercontent()}
  //       </div> */}
  //         <div>
  //           <div className="footer-sec-1 d-flex justify-content-center align-items-center border-top border-secondary gap-4 pt-2">
  //             <div className="footer-sec d-flex justify-content-center align-items-center">
  //               <p className="m-auto">
  //                 English (IN) &nbsp;<span>₹INR</span>
  //               </p>
  //             </div>
  //             <div className="social-icon d-flex align-items-center justify-content-center gap-2">
  //               <i class="fa-brands fa-facebook"></i>
  //               <i class="fa-brands fa-square-twitter"></i>
  //               <i class="fa-brands fa-square-instagram"></i>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   );
  // }

  const footerSections = [
    {
      title: "Support",
      items: [
        "Help Center",
        "Disability support",
        "Cancellation options",
        "Report neighbourhood concern",
      ],
    },
    {
      title: "Hosting",
      items: [
        "Community forum",
        "Hosting responsibly",
        "Join a free Hosting class",
        "Find a co-host",
      ],
    },
    {
      title: "Travstay",
      items: [
        "Newsroom",
        "New features",
        "Manage your reservations",
        "Travstay.org emergency stays",
      ],
    },
  ];

  return (
    <div className="footer-custom">
      <div className="container">
        <div className="row">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-3 border-bottom border-secondary"
            >
              <h1 className="fs-6">{section.title}</h1>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="footer-sec-1 d-flex justify-content-center align-items-center border-top border-secondary gap-4 pt-2">
            <div className="footer-sec d-flex justify-content-center align-items-center">
              <p className="m-auto">
                English (IN) &nbsp;<span>₹INR</span>
              </p>
            </div>
            <div className="social-icon d-flex align-items-center justify-content-center gap-2">
            <FaFacebook  />
            <FaTwitterSquare  />
            <FaInstagramSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
