import { useContext, useState } from "react";
import "./login.scss";

import { Link, useNavigate } from "react-router-dom";

import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {



  const navigate=useNavigate()

  const{updateUser,currentUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)

  
    
    const foamData= new FormData(e.target)
    const username=foamData.get("username")  
    const password=foamData.get("password")  
    try {
      const res=await apiRequest.post("/auth/login",{
        username,password
    })
          if(res.data.pinset===true){
            updateUser(res.data.data)
            navigate("/home")
          }
          else{
            updateUser(res.data.data)
            console.log(res.data.data)



            navigate("/pin/"+res.data.data.CustomerId)
            
          }
 

} catch (err) {
      setError(err.response.data.message )
    }
   finally{
    setIsLoading(false) 
   }
  }

  return (
    
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
        <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />
          <h2>Welcome back</h2>
          <div className='heading'>
             
                <h3>Are You New ?
                    <Link to="/register">
                        <span>  Register Here</span>
                    </Link>
                    
                </h3>
            </div>
          <input name="username"  maxLength={80} type="text" placeholder="Username" />
          <input name="password"  type="password" placeholder="Password" />
            
           
          <button type="submit"  disabled={isLoading}>Login</button>
          <div>
                    
          {error&&<span>{error}</span>}

<h3>  <Link to="/passwordForgot">{"Did "} you Forgot Your Password?</Link>   </h3>
                    

                 </div>
     

        </form>
      </div>

    </div>
  );
}

export default Login;
