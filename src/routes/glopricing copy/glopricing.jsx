import React, { useState } from 'react';
import './glopricing.css'; // Include your hot CSS file
import { useEffect } from 'react';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
const GLO = () => {
  const navigate=useNavigate()
  const[price,setPrice]=useState({})
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
const a=formData.get("glo200mb")
const b=formData.get("glo500mb")

const c=formData.get("glo1gb")
const d=formData.get("glo2gb")
const ee=formData.get("glo3gb")
const f=formData.get("glo5gb")
const g=formData.get("glo10gb")
try {
  const res=await apiRequest.post("/auth/setGloData",{
    a,b,c,d,ee,f,g 
  })
  navigate("/adminHome")
} catch (error) {
  console.log(error)
  
}


}

  return (
    <div className="admin-pricing-container">
      <h3>Admin - Set Prices for Items</h3>
    
      <div className="item-list">
      <form  onSubmit={HandleSubmit}>    
          <div  className="item-row">
            <span className="item-name">GLO 200MB</span>
            <input
              type="number"
              name="glo200mb"
              defaultValue={price.glo200mb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 500MB</span>
            <input
              type="number"
              name="glo500mb"
              defaultValue={price.glo500mb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 1GB</span>
            <input
              type="number"
              name="glo1gb"
              defaultValue={price.glo1gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 2GB</span>
            <input
              type="number"
              name="glo2gb"
              defaultValue={price.glo2gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 3GB</span>
            <input
              type="number"
              name="glo3gb"
              defaultValue={price.glo3gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 5GB</span>
            <input
              type="number"
              name="glo5gb"
              defaultValue={price.glo5gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div  className="item-row">
            <span className="item-name">GLO 10GB</span>
            <input
              type="number"
              name="glo10gb"
              defaultValue={price.glo10gb}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <br></br>
          <button 
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Pay Now
        </button>
          </form>
      
      </div>
    
    </div>
    
  );
};

export default GLO;
