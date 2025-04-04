import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Listing from "./pages/Listing.jsx";
import LayoutComponent from "./layout/LayoutComponent.jsx";
import Hero from "./components/Hero.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage.jsx";
import PlacesForm from "./pages/PlacesForm.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import Booking from "./pages/BookingPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";


const isProduction = process.env.NODE_ENV === 'production';
axios.defaults.baseURL= isProduction ? import.meta.env.VITE_API_BASE_URL : "http://localhost:8080/"
axios.defaults.withCredentials=true


const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: "/",
        element: <LayoutComponent />,
        children: [
          {
            index: true,
            element: <Hero />,
          },
          {
            path: "/listing/:id",
            element: <Listing />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
          {
            element:<ProtectedRoute/>,
            children:[
              {
                path: "/account",
                element: <ProfilePage />,
              },
              {
                path: "/account/places",
                element: <PlacesPage />,
              },
              {
                path: "/account/places/new",
                element: <PlacesForm />,
              },
              {
                path: "/account/places/:id",
                element: <PlacesForm />,
              },
              {
                path: "/places/:id",
                element: <PlacesForm />,
              },
              {
                path: "/account/bookings",
                element: <BookingsPage />,
              },
              {
                path: "/account/bookings/:id",
                element: <Booking />,
              },
            ]
          }
        ],
      },
    ],
     // {
    //   path: "/listing/:id/all-photos",
   //   element: <AllImages />,
   // },
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
