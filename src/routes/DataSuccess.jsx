import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, updateUser } = useContext(AuthContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const status = urlParams.get('paymentStatus');
    
    // Handle different Monnify status responses
    switch(status) {
      case 'PAID':
        // Payment successful, fetch updated user data
        const fetchUpdatedUser = async () => {
          try {
            const response = await apiRequest.get(`/auth/user/${currentUser.CustomerId}`);
            if (response.data) {
              updateUser(response.data);
            }
          } catch (error) {
            console.error("Error fetching updated user data:", error);
            navigate('/fund');
          }
        };
        fetchUpdatedUser();
        break;
      
      case 'PENDING':
        navigate('/fund');
        break;
      
      case 'CANCELLED':
      case 'FAILED':
        navigate('/fund');
        break;
      
      default:
        navigate('/fund');
    }
  }, [location.search, currentUser.CustomerId, updateUser, navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f0f8ff",
      }}
    >
      <img
        src="/success.jfif" // Replace with your success image URL
        alt="Success"
        style={{
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "24px", marginBottom: "10px", color: "#28a745" }}>
        Transaction Successful!
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
        Payment completed successfully. Thank you for using our service.
      </p>
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
        New Balance: ₦{currentUser.Price}
      </p>
      <button
        onClick={() => navigate('/home')}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default SuccessPage;
