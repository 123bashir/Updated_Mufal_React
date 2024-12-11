import React, { useState } from 'react';
import './9mobilepricing.css'; // Include your hot CSS file
import { useEffect } from 'react';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
const NMOBILE = () => {
  const [prices, setPrices] = useState({});
  const navigate=useNavigate()

  useEffect(()=>{
    const fetchPrice=async()=>{
  const res=await apiRequest.get("/auth/fetchPrice")
  const r=res.data[0]
  setPrices(r)
    }
    fetchPrice()
},[])
const HandleSubmit=async(e)=>{
 e.preventDefault() 
 const formData=new FormData(e.target)  
 const a=formData.get("9mobile200mb")
 const b=formData.get("9mobile500mb")
 const c=formData.get("9mobile1gb")
 const h=formData.get("9mobile2gb")
 const ee=formData.get("9mobile3gb")
 const d=formData.get("9mobile5gb")
 const f=formData.get("9mobile10gb")
 const g=formData.get("9mobile15gb")
try {
  const res=await apiRequest.post("/auth/setNineData",{
    a,b,c,d,ee,f,g,h
  })
  navigate("/adminHome")
  
} catch (error) {
  console.error(error)
}

}


  return (
    <div className="admin-pricing-container">
      <h2>Admin - Set Prices for Items</h2>
      <div className="item-list">
        <form onSubmit={HandleSubmit}> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 200MB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile200mb"
          defaultValue={prices.nine200mb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 500MB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile500mb"
          defaultValue={prices.nine500mb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 1GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile1gb"
          defaultValue={prices.nine1gb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 2GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile2gb"
          defaultValue={prices.nine2gb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 3GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile3gb"
          defaultValue={prices.nine3gb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 5GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile5gb"
          defaultValue={prices.nine5gb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 10GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile10gb"
          defaultValue={prices.nine10gb}
              className="price-input"
            />
          </div> 
          <div  className="item-row">
            <span className="item-name">9MOBILE 15GB</span>
            <input
              type="number"
              placeholder="Enter price"
          name="9mobile15gb"
          defaultValue={prices.nine15gb}
              className="price-input"
            />
          </div> 
          <button 
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Pay Now
        </button>
          </form>
      </div>
     
    </div>
    
  );
};

export default NMOBILE;
