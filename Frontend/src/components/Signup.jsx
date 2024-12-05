import React, { useState } from "react";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";
import { Link } from "react-router-dom";
import "../style/Login.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h5>Register</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="email"
                placeholder="enter your name"
                onClick={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                placeholder="your@gmail.com"
                onClick={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="pass"
                placeholder="password"
                onClick={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button>Register</button>
            </div>
            <p>
              Aready have account then? <Link to="/login">Login now</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
