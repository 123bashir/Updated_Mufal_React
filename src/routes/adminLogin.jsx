import React from 'react';
import apiRequest from '../lib/apiRequest';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { updateAdmin } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/AdminLogin", { email, password });
      updateAdmin(res.data)
      navigate("/AdminHome")
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
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
        <div style={{ marginBottom: '20px' }}>
          <img
            src="/mufalogo.png" // Replace with your logo URL
            alt="Admin Logo"
            style={{ width: '80px', borderRadius: '50%' }}
            width="60%"
          />
        </div>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name='email'
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />

          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder="Password"
              style={{
                width: '100%',
                padding: '12px',
                paddingRight: '40px', // Leave space for the icon
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
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Login
          </button>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
