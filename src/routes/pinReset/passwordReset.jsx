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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
        <form onSubmit={handleResetPassword}>
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
             Create New Password{' '}
                <span>To Join</span>
            </p>
          </div>
          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              name="pwd"
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
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
              name="Cpwd"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm New Password"
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
            {isLoading ? 'Loading...' : 'Reset Now'}
          </button>

          {error && <span style={{ color: "red" }}>{error}</span>}

          <p style={{ marginTop: '20px', backgroundColor:"inherit" }}>
        
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
