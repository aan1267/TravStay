import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Login.css"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



function Signup() {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()

  const handleError=(e)=>{
    toast.error(e,{
      position:"top-right"
    })
  }

  const handleSuccess=(msg)=>{
    toast.success(msg,{
      position:"top-right"
    })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // };
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  const signupSchema= Yup.object().shape({
    username:Yup.string().required("Username is required").min(3).max(25),
    email:Yup.string().matches(emailPattern,"please enter valid email address").required("please enter your email"),
    password:Yup.string().max(6).required("password is required").matches(/[!@#$%^&*(),.?":{}|<>]/, 
      "Password must contain at least one special character"
    ),
  })

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver: yupResolver(signupSchema)
  })

  const onSubmit= async(data)=>{
    // console.log(data)
    setLoading(true)
    try{
      const res= await axios.post("/jwt/signup",data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(res.status === 201){
         navigate("/login")
        handleSuccess("registered successfull!")
        setLoading(false)
      }else{
         handleError("registered fail")
      }
    }catch(e){
      console.log(e)
      handleError("registeration failed")
      setLoading(false)
    }
  }


  return (
    <div>
      <div className="login-container d-flex align-items-center justify-content-center p-5 mt-5">
        <div className="login-box mt-5">
          <h5 className="text-center fs-1 border-bottom pb-3">Register</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                 id="username"
                placeholder="enter your name"
                disabled={loading}
                readOnly={loading}
                // onChange={(e) => setUsername(e.target.value)}
                {...register("username")}
              />
               <p className="error">{errors.username?.message}</p>
            </div>
            <div>
              <input
                type="text"
                 id="email"
                placeholder="your@gmail.com"
                disabled={loading}
                readOnly={loading}
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email")}
              />
               <p className="error">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="password"
                 id="password"
                placeholder="password"
                disabled={loading}
                readOnly={loading}
                // onChange={(e) => setPassword(e.target.value)}
                {...register("password")}
              />
               <p className="error">{errors.password?.message}</p>
            </div>
            <div>
              <button class="login-btn">{loading ?<span>Loading...</span>:<span>Register</span>}</button>
            </div>
            <p className="text-nowrap">
              Aready have account then? <Link to="/login">Login now</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
