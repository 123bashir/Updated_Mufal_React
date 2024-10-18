import { useContext, useState } from "react";
import "./login.scss";

import { Link, useNavigate ,json} from "react-router-dom";

import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function ChangePin() {
  const{currentUser}=useContext(AuthContext)




  const navigate=useNavigate()

  const{updateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)

  
    
    const foamData= new FormData(e.target)
    const OldP=foamData.get("OldP") 
    const CNewP=foamData.get("CNewP")  
 
    const NewP=foamData.get("NewP")   
   const d=currentUser.CustomerId

    try {
      const res=await apiRequest.post("auth/ChangePin",{
        OldP,NewP,CNewP,d
    }) 

navigate("/home")
    
          
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
        <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />
        {error&&<span style={{color:"red"}}>{error}</span>}
          <h4>Change New Transaction Pin</h4>
          <div className='heading'>
       
            </div>
          <input name="OldP"  maxLength={4} type="password" placeholder="Old Pin" />
          <input name="NewP" maxLength={4} type="password" placeholder="New Pin" />
          <input name="CNewP" maxLength={4} type="password" placeholder="Confirm New Pin" />

            
           
          <button type="submit"  disabled={isLoading}>Change Now</button>
          <div>
                    


<h3>  <Link to="/">{"GO "} To Homepage</Link>   </h3>
                    

                 </div>
     

        </form>
      </div>
      {/* <div className="imgContainer"> */}
        {/* <img className="yhy" src="/landingImg.jpg" alt="" /> */}
      {/* </div> */}
    </div>
  );
}

export default ChangePin;
