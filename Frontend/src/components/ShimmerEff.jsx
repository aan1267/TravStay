import React from "react"
import { Skeleton } from "@mui/material"
import "../styles/ShimmerEff.css"


const ShimmerEff = () => {
          return (
            <div className="container mt-2">
            <div className="row g-4">
              {Array.from({ length: 21 }).map((_, index) => (
                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-2 g-3">
                   <Skeleton variant="rectangle" className="rounded shimmer-card" />
                  <Skeleton variant="text" width="50%" height={20} />
                  <Skeleton variant="text" width="30%" height={20} />
                </div>
              ))}
            </div>
          </div>
              )}


export default ShimmerEff;



