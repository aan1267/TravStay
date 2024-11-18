import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { SearchProvider } from "./SearchContext";
export default function HomeLandingPage() {
  return (
    <>
       <div className="app-container"> 
        <SearchProvider>
          <Navbar />
          <Hero />
        </SearchProvider>
        <Footer />
       </div> 
    </>
  );
}
