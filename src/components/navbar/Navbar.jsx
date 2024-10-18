import { useContext, useState } from "react";
import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// import { BiUserCircle } from 'react-icons/bi';
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";


function Navbar() {
    const{updateUser,currentUser}=useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
const id=currentUser.CustomerId
    const navigate = useNavigate();
 
    useEffect(() => {
      const fetchMessage = async () => {
        try {
          const response = await apiRequest.get("/auth/dialog"); 
          console.log(response)
          setMessage(response.data);
          setShowDialog(true); // Show the dialog box
        } catch (error) {
          console.error("Error fetching message:", error);
        }
      };
  
      fetchMessage();
    }, []);
  
    // Handle closing the dialog box
    const handleClose = () => {
      setShowDialog(false);
    };
  
  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8800/api/auth/home'); // Adjust URL accordingly
   const price=response.data[0]
   console.log(response)
   navigate('/BuyData', { state: { price } });
    }
    
     catch (err) {
      setError('Error fetching price. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleTransaction = async () => {
    setLoading(true);
    setError(null);
 
    try {
 
      const response = await axios.get(`http://localhost:8800/api/auth/transaction/${id}`); // Adjust URL accordingly
   const price=response.data
   navigate(`/transaction/`+id, { state: [price ] });
    }
    
     catch (err) {
      setError('Error fetching price. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  
    const handleWhatsAppRedirect = () => {
        // Replace with your WhatsApp number in international format
        const phoneNumber = '+2349038271764'; // e.g., '1234567890' for a phone number +1234567890
        const message = encodeURIComponent(`Hello , I am  "${currentUser.username}" iam using mufal datasub would like to inquire about your business.`);
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Open the WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
      };
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const toggleBalanceVisibility = () => { 
    setIsBalanceVisible(!isBalanceVisible);

  };

  return (


    
    <>
     <div>

      {/* Dialog box (modal) */}
      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <i>{message}</i>
          <button onClick={handleClose} style={{ marginTop: "10px" }}>
            Close
          </button>
        </div>
      )}

      {/* Background overlay when dialog is active */}
      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
    <div className='profile-container'>
        <h1 className='profile-title'>Welcome Back {currentUser.username}</h1>
        <div className='profile-img'>
        <img src={currentUser.avatar || "/noavata.png"} alt="" className="avatar" />
        </div>
        <div className='user-info'>
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> {currentUser.username}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>

        </div>
        <div className='service-history'>
            <h2>Wallet Balance</h2>

            <p  className="clickable-activity">
                <strong>Total:</strong>         {isBalanceVisible ? `NGN ${currentUser.Price || 0.000} ` : '******'} 
                      {/* Button to show/hide balance */}
            <p style={{cursor:"pointer",color:"blue"}} className="bbj" onClick={toggleBalanceVisibility}>
        {isBalanceVisible ? 'Hide ' : 'Show '}
      </p><p>
       
      
      </p>
      
     
       
            </p> 
        <div className="logout-container">

        <Link to="/fund">    <button  type="button" className="logout-button">
                Fund Your Wallet
            </button></Link>
        
           </div>
         
        </div>
        <div className="security-settings">
            <h2> Our Services</h2>
            <div className="container">
            <a

      onClick={handleClick}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >   <div className="div" id="kano">
            <img className="icon" src="./rrdata.png" width="100%"/>
                     Buy Data
        </div></a>
        <a
      href="/BuyAirtime"
      onClick={handleClick}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >   <div className="div" id="kano">
            <img className="icon" src="./n.png" width="100%"/>
                     Buy Airtime
        </div></a>
        <a
      href="/profile/update"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >   <div className="div" id="kano">
            <img className="icon" src="./uupdate.png" width="100%"/>
                     Update Profile
        </div></a>
        <a
      href="/ChangePin"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >   <div className="div" id="kano">
            <img className="icon" src="./ccpin.png" width="100%"/>
                     Change Pin
        </div></a>
        <a
      href="/transaction"
      onClick={handleTransaction}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >      <div className="div" id="kano">
            <img className="icon" src="./t.png" width="80%"/>
                     Transaction History
        </div></a>
    
     
    </div>

        </div>
        <div className='service-history'>
       
        
      
  
   
     
  

         
        </div>
        <>
            <footer className='footer-container' id='contact'>
                <div className='footer-content'>
                </div>
                    <div className='footer-links'>
                   
               <img src="./mufalogo.png" width="99%"></img>

      
                        <button onClick={ handleWhatsAppRedirect}  className='logout-button'>
                            Chat With Mufal Agent On Whatsapp
                        </button>
                    
                </div>
                <div className='footer-copyright'>
                    &copy; 2024 Slotify. All Rights Reserved.
                </div>
            </footer>
  
        </>
       
    </div>
    
</>
  );
}

export default Navbar;
