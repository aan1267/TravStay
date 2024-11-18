import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import HomeLandingPage from './components/home/HomeLandingPage.jsx'
// import Footer from './components/home/Footer.jsx';
// import Popular from "./components/home/Popular.jsx";

const router=createBrowserRouter([
  {
    path: "/",
  element: 
      <HomeLandingPage />
  },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


