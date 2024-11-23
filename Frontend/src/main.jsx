import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import HomeLandingPage from './components/home/HomeLandingPage.jsx'
import Login from "./components/Login.jsx";
import { SearchProvider } from "./components/home/SearchContext.jsx";
import Signup from "./components/Signup.jsx";


const router=createBrowserRouter([
  {
    path: "/",
  element: 
      <HomeLandingPage />
  },
  {
    path:"/login",
    element:
     <SearchProvider><Login/></SearchProvider>
  },
  {
    path:"/signup",
    element:
     <SearchProvider><Signup/></SearchProvider>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


