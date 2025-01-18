import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {

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
