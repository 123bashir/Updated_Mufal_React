import React, { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from'react-router-dom'
import apiRequest from "../../lib/apiRequest";
import './mtnpricing.css'; 
const MTN = () => {
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
const a=foamData.get("mtnsme500")
const b=foamData.get("mtnsme1gb")

const c=foamData.get("mtnsme2gb")

const d=foamData.get("mtnsme3gb")
const ee=foamData.get("mtnsme5gb")

const f=foamData.get("mtnsme10gb")
const g=foamData.get("mtnsme2500mb")
const h=foamData.get("mtnsme21gb")
const i=foamData.get("mtnsme21p5")
const j=foamData.get("mtnsme22gb")
const k=foamData.get("mtnsme23gb")
const l=foamData.get("mtnsme24gb")
const m=foamData.get("mtnsme25gb")
const n=foamData.get("mtnsme210gb")
const o=foamData.get("mtndatashare1gb")
const p=foamData.get("mtndatashare2gb")
const q=foamData.get("mtndatashare3gb")
const r=foamData.get("mtndatashare5gb")
const s=foamData.get("mtndatashare500mb")
const t=foamData.get("cooperate500mb")
const u=foamData.get("cooperate250mb")
const v=foamData.get("cooperate1gb")
const w=foamData.get("cooperate2gb")
const x=foamData.get("cooperate3gb")
const y=foamData.get("cooperate5gb")
const z=foamData.get("cooperate10gb")
const aa=foamData.get("mtngifting500mb")
const ab=foamData.get("mtngifting1gb")
const ac=foamData.get("mtngifting1p5gb")
const ad=foamData.get("mtngifting2p5gb")
const ae=foamData.get("mtngifting3p5gb")
const af=foamData.get("mtngifting15gb")




try { 
  const res=await apiRequest.post("/auth/setMtnData",{
    a,b,c,d,ee,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af
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
            <span className="item-name">MTNSME 500MB</span>
            <input
              type="number"
              name="mtnsme500"
              defaultValue={price.mtnsme500}
              placeholder="Enter price"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME 1GB</span>
            <input
              type="number"
              placeholder="Enter price"
              defaultValue={price.mtnsme1gb}
              name="mtnsme1gb"
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME  2GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme2gb"
              defaultValue={price.mtnsme2gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME  3GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme3gb"
              defaultValue={price.mtnsme3gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME 5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme5gb"
              defaultValue={price.mtnsme5gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME  10GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme10gb"
              defaultValue={price.mtnsme10gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2 500MB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme2500mb"
              defaultValue={price.mtnsme2500mb}
           
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2 1GB</span>
            <input
              type="number"
              name="mtnsme21gb"
              defaultValue={price.mtnsme21gb}
              placeholder="Enter price"
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2  1.5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme21p5"
              defaultValue={price.mtnsme21p5}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2 2GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme22gb"
              defaultValue={price.mtnsme22gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2 3GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme23gb"
              defaultValue={price.mtnsme23gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2  4GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme24gb"
              defaultValue={price.mtnsme24gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2  5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme25gb"
              defaultValue={price.mtnsme25gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNSME2  10GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtnsme210gb"
              defaultValue={price.mtnsme210gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNDATASHARE  1GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtndatashare1gb"
              defaultValue={price.mtndatashare1gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNDATASHARE   2GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtndatashare2gb"
              defaultValue={price.mtndatashare2gb}
       
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNDATASHARE    3GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtndatashare3gb"
              defaultValue={price.mtndatashare3gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNDATASHARE   5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtndatashare5gb"
              defaultValue={price.mtndatashare5gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">MTNDATASHARE   500MB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtndatashare500mb"
              defaultValue={price.mtndatashare500mb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE    500MB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate500mb"
              defaultValue={price.cooperate500mb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE   250MB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate250mb"
              defaultValue={price.cooperate250mb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE   1GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate1gb"
              defaultValue={price.cooperate1gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE   2GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate2gb"
              defaultValue={price.cooperate2gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE   3GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate3gb"
              defaultValue={price.cooperate3gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE      5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate5gb"
              defaultValue={price.cooperate5gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">COOPERATE    10GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="cooperate10gb"
              defaultValue={price.cooperate10gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">GIFTING    500MB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting500mb"
              defaultValue={price.mtngifting500mb}
              className="price-input"
            />
          </div>
   
          <div className="item-row">
            <span className="item-name">GIFTING   1GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting1gb"
              defaultValue={price.mtngifting1gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">GIFTING   1.5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting1p5gb"
              defaultValue={price.mtngifting1p5gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">GIFTING  2.5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting2p5gb"
              defaultValue={price.mtngifting2p5gb}
              className="price-input"
            />
          </div>
          <div className="item-row">
            <span className="item-name">GIFTING    3.5GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting3p5gb"
              defaultValue={price.mtngifting3p5gb}
              className="price-input"
            />
          </div> 
          <div className="item-row">
            <span className="item-name">GIFTING      15GB</span>
            <input
              type="number"
              placeholder="Enter price"
              name="mtngifting15gb"
              defaultValue={price.mtngifting15gb}
              className="price-input"
            />
          </div>
          <br></br>  
          <button type="submit"
          style={{ width: "100%", padding: "12px", fontSize: "18px", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Pay Now
        </button>
          </form>
      </div>
    
    </div>
  );
};

export default MTN;
