import React, { useState } from "react"
import Navbar from "./home/Navbar"
import Footer from "./home/Footer"
import { Link } from "react-router-dom"
import "../style/Login.css"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from "./AuthContext"

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const {verifyToken}=useAuth()

  const handleError=(err)=>{
    toast.error(err,{
      position:"top-right"
    })
  }

  const handleSuccess=(msg)=>{
    toast.success(msg,{
       position:"top-right"
    })
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const loginSchema= Yup.object().shape({
    email:Yup.string().required("please enter your email").matches(emailPattern,"enter valid email"),
    password:Yup.string().max(6).required("password is required").matches(/[!@#$%^&*(),.?":{}|<>]/, 
      "Password must contain at least one special character"
    ),
  })

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver: yupResolver(loginSchema)
  })
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const onSubmit=async(data)=>{
    // console.log(data)
     try{
      const res= await axios.post("http://localhost:8080/jwt/login",data,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
        if(res.status === 201){
          localStorage.setItem("usersdatatoken",res.data.result.token)
          await verifyToken()
          handleSuccess("Login Successfully")
          setTimeout(() => {
            navigate("/")
          },1000)
        }else{
          handleError("Login failed")
        }
     }catch(e){
      handleError("Login failed")
      console.error("Login error",e)
      }
    }

   
return (
      <div>
      <div className="login-container  d-flex align-items-center justify-content-center ">
        <div className="login-box mt-5">
          <h1 className="text-center fs-1 border-bottom pb-3">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div>
              <input
                type="text"
                id="email"
                placeholder="your@gmail.com"
                // onClick={(e) => setEmail(e.target.value)}
                {...register("email")}
              />
              <p className="error">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="password"
                 id="password"
                placeholder="password"
                // onClick={(e) => setPassword(e.target.value)}
                {...register("password")}
              />
               <p className="error">{errors.password?.message}</p>
            </div>
            <div>
              <button class="login-btn">Login</button>
            </div>
            <p className="text-nowrap">
              Don't have an account yet?<Link to="/signup">Register now</Link>
            </p>
          </form>
        </div>
        </div>
      <ToastContainer />
    </div>

  );
}

export default Login;
