import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
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
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      if (res.data.pinset === true) {
        updateUser(res.data.data);
        navigate("/home");
      } else {
        updateUser(res.data.data);
        navigate("/pin/" + res.data.data.CustomerId);
      }
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
          <h5 style={{ marginBottom: '20px', color: '#333' }}>Welcome back</h5>
          <div className='heading' style={{ marginBottom: '20px' }}>
            <p style={{backgroundColor:"inherit"}}>
              Are You New?{' '}
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <span>Register Here</span>
              </Link>
            </p>
          </div>
          <input
            name="username"
            maxLength={80}
            type="text"
            placeholder="Username"
            required
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

          {/* Password Input with Toggle Icon */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          {error && <span style={{ color: "red" }}>{error}</span>}

          <p style={{ marginTop: '20px', backgroundColor:"inherit" }}>
            <Link to="/passwordForgot" style={{ color: 'grey', textDecoration: 'none' }}>
              Did you forget your password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
