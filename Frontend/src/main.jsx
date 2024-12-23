import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Listing from "./components/Listing.jsx";
import AllImages from "./components/AllImages.jsx";
import LayoutComponent from "./components/home/LayoutComponent.jsx";
import Hero from "./components/home/Hero.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import PlacesPage from "./components/PlacesPage.jsx";
import PlacesForm from "./components/PlacesForm.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";

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
            path:"/account/booking",
            element:<ProfilePage/>
          }
        ],
      },
    ],
  },
  {
    path: "/listing/:id/all-photos",
    element: <AllImages />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
