import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

import apiRequest from "../../lib/apiRequest";
import { redirect, useNavigate } from "react-router-dom";

function Fund() {
   const navigate=useNavigate()
     
    useEffect(() => {
      const checkUser = async () => {
        const user = sessionStorage.getItem("user");
        if (!user) {
          navigate("/login");
        }
      };
      checkUser();
    }, [navigate]);
  const { currentUser } = useContext(AuthContext);

  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  
  const [loading, setLoading] = useState(false);

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    if (/^\d*$/.test(inputAmount)) {
      setAmount(inputAmount);
      setTotalAmount((parseFloat(inputAmount) -50).toFixed(2)); 
    }
 
  };

  const initiatePayment = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }


    setLoading(true);
    try {
      const paymentData = {
        amount: parseFloat(amount),
        customerName: currentUser.username,
        customerEmail: currentUser.email,
        paymentReference: `monnify_${Date.now()}`,   
        paymentDescription: "Payment For MufalDatasub",
        currencyCode: "NGN",
        contractCode: "2085089963",
        isTestMode: true,
        paymentMethods: ["CARD", "ACCOUNT_TRANSFER"]
      };

      const response = await apiRequest.post('/initiate-payment', paymentData);
      
      if (response.data && response.data.responseBody && response.data.responseBody.checkoutUrl) {
        window.location.href = response.data.responseBody.checkoutUrl;
      } else {
        alert("Unable to initiate payment. Please try again.");
      }
    } catch (error) {
      alert("Error initiating payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 


  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Make a Payment</h2>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="amount" style={{ display: "block", marginBottom: "8px", color: "#555" }}>Amount (in Naira):</label>
        <input 
          type="text" 
          id="amount" 
          value={amount} 
          onChange={handleAmountChange} 
          placeholder="Enter in Naira" 
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="totalAmount" style={{ display: "block", marginBottom: "8px", color: "#555" }}>Amount To Be Added In Wallet</label>
        <input 
          type="text" 
          id="totalAmount" 
          value={totalAmount}   
          readOnly 
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "#e9ecef", color: "#333" }} 
        />
      </div>
      {loading ? (
        <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>
      ) : (
        <button 
          onClick={initiatePayment} 
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Pay Now
        </button>
      )}
    </div>
  );
}

export default Fund;
