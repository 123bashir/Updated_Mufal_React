import { useContext, useState } from "react";
import "./passwordForgot.scss"
import { Link, useNavigate ,json} from "react-router-dom";
import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function PasswordForgot() {


  const{updateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [message, setMessage] = useState('');

  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")


    setIsLoading(true)


    
    const foamData= new FormData(e.target)
    const email=foamData.get("email")  
    

    try {
      const res=await apiRequest.post("/auth/PasswordForgot",{
        email
    })
    setMessage(res.data.message);

         
    } catch (err) {

      setError(err.response.data.message)

    }
   finally{
    setIsLoading(false)
   }
  }

  return (
    <div className="login">
      
      <div className="formContainer">
    
        <form onSubmit={handleSubmit}>
        {error&&<span style={{color:"red"}}>{error}</span>}
        {message&&<h4 style={{color:"green"}}>{message}</h4>}
          <h3>Enter Your Email Below</h3>
          <div className='heading'>
             
                <h4 className="fagge">
                To Get Verification Link
                    
                </h4>
            </div>
          <input name="email"  minLength={3} maxLength={80} type="text" placeholder="Email" />

          <button disabled={isLoading}>Send Verification Link</button>
          <h3>  <Link to="/login">{"Back "} To Login </Link>  </h3>
       

  

        </form>
      </div>
   
    </div>
  );
}

export default PasswordForgot;
