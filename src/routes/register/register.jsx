import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {

  const [error,setError]=useState("")
   const navigate=useNavigate()
  const [isLoading,setIsLoading]=useState(false)


  const handleSubmit=async(e)=>{
    e.preventDefault()
  setIsLoading(true)
  setError("")
    
    const foamData= new FormData(e.target)
    const username=foamData.get("username")
    const email=foamData.get("email")  
    const password=foamData.get("password")  

    try {
      const res=await apiRequest.post("/auth/register",{
        username,email,password
    })
    navigate("/login")
    } catch (err) {
      setError(err.response.data.message)
    }

    finally{
      setIsLoading(false)
    }

  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}> 
        <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />

          <h4>Create an Account</h4>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="email" placeholder="Email" required />
          <input    name="password" type="password" placeholder="Password" required />
         
          

          <button  disabled={isLoading}>Register</button>
          {error&&<span>{error}</span>}
         <h3 ><Link to="/login">Do you have an account?</Link></h3> 
        </form>
      </div>
      {/* <div className="imgContainer"> */}
        {/* <img className="yhy" src="/landingImg.jpg" alt="" /> */}
      {/* </div> */}
      
    </div>
  );
}

export default Register;
