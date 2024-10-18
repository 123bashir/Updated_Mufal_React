import { useContext, useState } from "react";
import "./pin.scss";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import apiRequest  from "../../lib/apiRequest";


function Pin() {
  const {currentUser}=useContext(AuthContext)
  const {id} = useParams();

  const navigate=useNavigate()
  const [inputValue, setInputValue] = useState('');

  const{updateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false)
  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and restrict to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)

    
    const foamData= new FormData(e.target)
    const pin=foamData.get("pin")  
    const Confirmpin=foamData.get("Confirmpin")  
    try {
      const res=await apiRequest.post(`/auth/pin/${id}`,{
        pin,Confirmpin
    })  
    updateUser(res.data) 
    console.log(res.data)  
 
            navigate("/home")

    }
     catch (err) {
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
          <h2>Welcome back, {currentUser.username} To Mufal DataSub</h2>
          <div className='heading'>
             
                <h3> Kindly Set Your Transaction Pin 
                   
                    
                </h3>
            </div>
            <input
          type="password" // Hidden like a password field
          id="number-input"
          value={inputValue}
          name="pin"
          onChange={handleChange}
          maxLength="4" // Limits input to 4 characters
          pattern="\d*" // Ensures only numbers are input
          placeholder="Enter 4 digits For Transaction "
          required
        />
           <input
          type="password" // Hidden like a password field
          id="number-input"
          name="Confirmpin"
          maxLength="4" // Limits input to 4 characters
          pattern="\d*" // Ensures only numbers are input
          placeholder="Confirm 4 digits For Transaction"
          required
        />
         
          <button  disabled={isLoading}>Go To Homepage</button>

          {error&&<span>{error}</span>}

        

        </form>
      </div>
 
    </div>
  );
}

export default Pin;
