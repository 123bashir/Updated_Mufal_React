import React, { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from'react-router-dom'
import apiRequest from "../../lib/apiRequest";
import './popup.css'; 
const Pop = () => {
  const [price,setPrice]=useState({})
  const navigate=useNavigate()
  useEffect(()=>{
      const fetchPrice=async()=>{
    const res=await apiRequest.get("/auth/fetchPrice") 
    const r=res.data[0]
    setPrice(r)
      }
      fetchPrice()
  },[])
const HandleSubmit=async(e)=>{
e.preventDefault() 
const foamData=new FormData(e.target)
const a=foamData.get("popup")



try { 
  const res=await apiRequest.post("/auth/popup",{
    a
  })
  navigate("/adminHome")
  
} catch (error) {
  console.error(error)
}
}

  return (
    <div className="admin-pricing-container">
      <h2>Pop Up Message</h2>
      <div className="item-list">
      <form onSubmit={HandleSubmit}>    


      
          <div className="item-row">
            <span className="item-name">PopUp Messages</span>
            <input
            width="100px"
              type="textarea"
              placeholder="Send PopUp Message"
              name="popup"
              defaultValue={price.DialogMessage}
              className="price-input"
            />
          </div>
         
          <br></br>  
          <button type="submit"
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
          </form>
      </div>
    
    </div>
  );
};

export default Pop;
