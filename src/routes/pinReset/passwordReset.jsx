import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';


const ResetPassword = () => {
  const { id, token } = useParams(); // Get user ID and token from the URL
  const [newPassword, setNewPassword] = useState('');
  const [error,setError]=useState("")
  const navigate =useNavigate()
  const [isLoading,setIsLoading]=useState(false)
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const foamData= new FormData(e.target)
    const pwd=foamData.get("pwd")  
    const Cpwd=foamData.get("cpwd")  

    try {
      const response = await apiRequest.post(`/auth/reset-password/${id}/${token}`, {
        id,
        token,
        pwd,Cpwd
      });
      navigate("/home")
      setMessage(response.data.message); 
  

    } catch (error) {
      setMessage(error.response.data.message || 'Something went wrong');
    }
  };


  return (
    <div className="login">
    <div className="formContainer">
 


      <form onSubmit={handleResetPassword}>
      <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />
      {error&&<span>{error}</span>}
      {message&&<span style={{color:"red"}}>{message}</span>}
        <h2>Reset New Password</h2>
        <div className='heading'>
           
          </div>
        <input name="pwd"  maxLength={80} type="password" placeholder="New Password" />
        <input name="cpwd"  type="password" placeholder="Confirm New Password" />
          
         
        <button type="submit"  disabled={isLoading}>Login</button>
        <div>
                  

                  

               </div>
   

      </form>
    </div>

  </div>
);
}

export default ResetPassword;
