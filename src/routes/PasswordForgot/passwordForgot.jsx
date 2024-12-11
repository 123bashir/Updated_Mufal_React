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
              Enter Your Email{' '}
                <span>To Reset Your Password</span>
            </p>
          </div>
          <input
            name="email"
            maxLength={80}
            type="text"
            placeholder="Email......"
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
    
            <span
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
            <Link to="/login" style={{ color: 'grey', textDecoration: 'none' }}>
              Back To Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default PasswordForgot;
