import React from "react";
import { useAuth } from "./AuthProvider";
import { Outlet, Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function ProtectedRoute() {
  const { isAuthenticate, loading } = useAuth();

  //  if(loading) return <div>Loading...</div>
  if (loading){
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;
