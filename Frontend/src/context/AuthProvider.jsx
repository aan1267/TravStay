import React, { createContext, useState, useEffect, useContext, Children } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = () => {
  const [fullName,setfullName]=useState(null)
  const [username, setUsername] = useState(null)
  const [email,setEmail]=useState(null)
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [loading,setLoading]=useState(true)
  
 
  const navigate = useNavigate()
   
 
  const verifyToken = async () => {
    try {
      let token = localStorage.getItem('usersdatatoken')

      if (!token) {
        setIsAuthenticate(false); 
        setLoading(false)
        return;
      }
      const res = await axios.get("/jwt/validuser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
       console.log(res.data.ValidUserOne)
      let username = res.data.ValidUserOne.username
      let email= res.data.ValidUserOne.email
      setEmail(email)
      setfullName(username)
      let fname = username[0].toUpperCase()
      setUsername(fname)
      setIsAuthenticate(true)
    } catch(e){
      console.error("Error verifying token:", e.message)
      localStorage.removeItem("usersdatatoken")
      setIsAuthenticate(false)
    }
    setLoading(false)
  }


  useEffect(() => {
      verifyToken()
  }, [])

  const logout = async () => {
    let token = localStorage.getItem('usersdatatoken')
    const res = await axios.post("/jwt/logout",{},{
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      withCredentials: true,
    })
    if(res.status === 201) {
      console.log("user logout")
      localStorage.removeItem("usersdatatoken")
      setIsAuthenticate(false)
      setUsername(null)
      navigate("/")
    } else {
      console.log("error")
    }
  }


  return (
    <AuthContext.Provider value={{ username, isAuthenticate, logout,verifyToken,fullName,email,loading}}>
      <Outlet /> 
    </AuthContext.Provider>
  )
}

//custom hook
export const useAuth = () => {
  return useContext(AuthContext);
}
