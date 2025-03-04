import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ManualDebiting.css"
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

function ManualDebiting() {
  const navigate=useNavigate()
  const[error,setError]=useState("")
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { updateUser, currentUser } = useContext(AuthContext); 

  const{id}=useParams()
 useEffect(()=>{
  const fetchFunding=async()=>{
   const res=await apiRequest.get(`/auth/BManual/${id}`)
setAmount(res.data[0].price)  }
  fetchFunding()

 } ,[])


  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    if (/^\d*$/.test(inputAmount)) {
      setTotalAmount((parseFloat( amount- inputAmount) ).toFixed(2)); // Adds 1.4% fee
    }
  };


  const HandleSubmit = async (e) => {
    e.preventDefault()
    try { 

      const formData = new FormData(e.target);
      const total = formData.get("total");
      const amount = formData.get("amount");
      const res=await apiRequest.post(`/auth/Ffunding/${id}`,{
        total,amount
    
      }
    
    )
    updateUser(res.data)

navigate("/BManual")    } catch (error) {
      console.error(error)
      setError(error.response.data.message)
    }
  };
  return (

    <form onSubmit={HandleSubmit}>  


<div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Enter Amount To Debit</h2>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="amount" style={{ display: "block", marginBottom: "8px", color: "#555" }}>Amount (in Naira):</label>
        <input 
          type="text" 
          id="amount" 
          name="amount"
          onChange={handleAmountChange} 
          placeholder="Enter in Naira" 
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="totalAmount" style={{ display: "block", marginBottom: "8px", color: "#555" }}>New Balance Will Be</label>
        <input 
          type="text" 
          name="total"
          id="totalAmount" 
          defaultValue={amount}
          value={totalAmount} 
          readOnly 
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "#e9ecef", color: "#333" }} 
        />
      </div>
      {loading ? (
        <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>
      ) : (
        <button 
      
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Pay Now
          
        </button>
        
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}

    </div>

    </form>

    
  );
}

export default ManualDebiting;
