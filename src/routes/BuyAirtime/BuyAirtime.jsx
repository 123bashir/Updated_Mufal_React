import { useContext, useState } from "react";
import "./login.scss";
import axios from 'axios';
import { Base64 } from 'js-base64';

import { Link, useNavigate ,json} from "react-router-dom";

import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function BuyAirtime() {


  const [inputValue, setInputValue] = useState('');
  const{updateUser,currentUser}=useContext(AuthContext)





  const navigate=useNavigate()

  const [error,setError]=useState("")
  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and restrict to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
  };
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)
try {
  

    
  const foamData= new FormData(e.target)
  const network=foamData.get("network")  
  const phonenumber=foamData.get("phonenumber")  
  const pin=foamData.get("pin")  
  const Plan=foamData.get("Plan")  
  const id=currentUser.CustomerId
  const byepass=foamData.get("byepass")  
      const response=await apiRequest.post("auth/BuyAirtime",{
        network,phonenumber,pin,byepass,Plan,id
      }) 
  
      navigate("/DataSuccess")


} catch (err) {
  console.log(err)
  setError(err.response)

  
}
  
  


  }

  return (
    
    <div className="login">
      <div className="formContainer">
 
          <fieldset >
     
          <form onSubmit={handleSubmit}>
         
          <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />
          {error&&<span style={{color:"red"}}>{error}</span>}
     
  <select name="network"> 
     
    <option >Choose Netwok</option>
    <option value="MTN">MTN</option>
    <option value="AIRTEL">AIRTEL</option>

    <option value="GLO">GLO</option>
    <option value="9MOBILE">9MOBILE</option>
  </select>
       
  <select name="Plan"> 
     
    <option >Choose Plan</option>
    <option value="₦100  @₦99">₦100  @₦99</option>
    <option value="₦200  @₦198">₦200  @₦198</option>

    <option value="₦300  @₦297">₦300  @₦297</option>
    <option value="₦500  @₦495">₦500  @₦495</option>
    <option value="₦1000  @₦990">₦1000  @₦990</option>

  </select>


     
          <input name="phonenumber"  type="number" placeholder="PhoneNumber" required  />
          <input
          type="password" // Hidden like a password field
          id="number-input"
          value={inputValue}
          name="pin"
          onChange={handleChange}
          maxLength="4" // Limits input to 4 characters
          pattern="\d*" // Ensures only numbers are input
          placeholder="Enter 4 digits"
          required
        />
          <label>
          <input type="checkbox"  name="byepass"/> Byepass Number Validator
        </label>

           
          <button type="submit"  >Buy Now</button>
          <div>
                    


                    

                 </div>
     

        </form>


          </fieldset>
       
      </div>

    </div>
  );
}

export default BuyAirtime;
