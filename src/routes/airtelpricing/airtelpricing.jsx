import React, { useState } from 'react';
import './airtelpricing.css'; // Include your hot CSS file
import { useEffect } from 'react';
import {useNavigate } from'react-router-dom'
import apiRequest from '../../lib/apiRequest';
const AIRTEL = () => {
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
  const formData=new FormData(e.target)
  const ag=formData.get("airtelgifting1gb")
const ah=formData.get("airtelgifting3gb")
const ai=formData.get("airtelgifting10gb")
const aj=formData.get("airtelcooperate300mb")
const ak=formData.get("airtelcooperate500mb")
const al=formData.get("airtelcooperate1gb")
const am=formData.get("airtelcooperate2gb")
const an=formData.get("airtelcooperate5gb")
const ao=formData.get("airtelcooperate10gb")
const ap=formData.get("airtelcooperate15gb")
try {
   const res=await apiRequest.post("/auth/setAirtelData",{
    ap,ao,an,am,al,ak,ai,ah,aj,ag
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
          <div className="item-row">
            <span className="item-name">AIRTEL GIFTING 1GB</span>
            <input
              type="number"
              name="airtelgifting1gb"
              defaultValue={price.airtelgifting1gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL GIFTING 3GB</span>
            <input
              type="number"
              name="airtelgifting3gb"
              defaultValue={price.airtelgifting3gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL GIFTING 10GB</span>
            <input
              type="number"
              name="airtelgifting10gb"
              defaultValue={price.airtelgifting10gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 300MB</span>
            <input
              type="number"
              name="airtelcooperate300mb"
              defaultValue={price.airtelcooperate300mb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 500MB</span>
            <input
              type="number"
              name="airtelcooperate500mb"
              defaultValue={price.airtelcooperate500mb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 1GB</span>
            <input
              type="number"
              name="airtelcooperate1gb"
              defaultValue={price.airtelcooperate1gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 2GB</span>
            <input
              type="number"
              name="airtelcooperate2gb"
              defaultValue={price.airtelcooperate2gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 5GB</span>
            <input
              type="number"
              name="airtelcooperate5gb"
              defaultValue={price.airtelcooperate5gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 10GB</span>
            <input
              type="number"
              name="airtelcooperate10gb"
              defaultValue={price.airtelcooperate10gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">AIRTEL COOPERATE 15GB</span>
            <input
              type="number"
              name="airtelcooperate15gb"
              defaultValue={price.airtelcooperate15gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <br></br>
      <button 
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Change Now
        </button>
        </form>
      </div>
    
    </div>

  );
};

export default AIRTEL;
