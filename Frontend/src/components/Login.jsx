import React, { useState } from "react";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";
import { Link } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h5>Login</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                type="text"
                placeholder="your@gmail.com"
                onClick={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="pass"
                type="password"
                placeholder="password"
                onClick={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button>Login</button>
            </div>
            <p>
              Don't have an account yet?<Link to="/signup">Register now</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
