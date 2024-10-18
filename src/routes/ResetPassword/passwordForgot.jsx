import { useContext, useState } from "react";
import "./passwordForgot.scss"
import { Link, useNavigate ,json} from "react-router-dom";
import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function PasswordForgot() {

  const navigate=useNavigate()

  const{updateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)
  

  }
   


  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h3>Enter Your Email Below</h3>
          <div className='heading'>
             
                <h4 className="fagge">
                To Get Verification Link
                    
                </h4>
            </div>
          <input name="email"  minLength={3} maxLength={80} type="text" placeholder="Email" />

          <button disabled={isLoading}>Send Verification Link</button>
          {error&&<span>{error}</span>}

  

        </form>
      </div>
      {/* <div className="imgContainer"> */}
        <img className="yhy" src="/landingImg.jpg" alt="" />
      {/* </div> */}
    </div>
  );
}

export default PasswordForgot;
