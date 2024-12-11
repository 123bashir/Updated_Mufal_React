import { useContext, useState } from "react";
import "./login.scss";

import { Link, useNavigate ,json} from "react-router-dom";

import apiRequest  from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function ChangePin() {
  const{currentUser}=useContext(AuthContext)
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and restrict to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
  };


  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <img
            src={"/mufalogo.png"}
            alt="Logo"
            style={{
              width: "100%",
              maxWidth: "200px",
              margin: "0 auto",
              marginBottom: '20px'
            }}
          />
          <div className='heading' style={{ marginBottom: '20px' }}>
            <p style={{backgroundColor:"inherit"}}>
              Change Your Transaction {' '}
                <span>Pin</span>
       
            </p>
          </div>
          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              name="OldP"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Old Pin"
              value={inputValue}
              onChange={handleChange}
              maxLength="4" // Limits input to 4 characters
              pattern="\d*" // Ensures only numbers are input
              required
              style={{
                width: '100%',
                padding: '12px',
                paddingRight: '40px', // Space for the icon
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#333',
              }}
            >
              {showPassword ? '🚫' : '👁️'}
            </span>
          </div>
          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              name="NewP"
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Pin"
              maxLength="4" // Limits input to 4 characters
              pattern="\d*" // Ensures only numbers are input
              required
              style={{
                width: '100%',
                padding: '12px',
                paddingRight: '40px', // Space for the icon
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#333',
              }}
            >
              {showPassword ? '🚫' : '👁️'}
            </span>
          </div>
          {/* Password Input with Toggle Icon */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              name="CNewP"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm New Pin"
              maxLength="4" // Limits input to 4 characters
              pattern="\d*" // Ensures only numbers are input
              required
              style={{
                width: '100%',
                padding: '12px',
                paddingRight: '40px', // Space for the icon
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#333',
              }}
            >
              {showPassword ? '🚫' : '👁️'}
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginBottom: '10px'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            {isLoading ? 'Loading...' : 'Change Now'}
          </button>

          {error && <span style={{ color: "red" }}>{error}</span>}

     
        </form>
      </div>
    </div>
  );
}

export default ChangePin;
