
  
    import React, { useState } from 'react';
import axios from "axios";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";

import { Link, useNavigate,useParams ,json} from "react-router-dom";

import apiRequest  from "../../lib/apiRequest"; 

function BuyData() {
  const location=useLocation()
  const [error,setError]=useState("")
  const [inputValue, setInputValue] = useState('');
  const{updateUser,currentUser}=useContext(AuthContext)

  const [isLoading,setIsLoading]=useState(false)
  const { price } = location.state || { price: 'Price not available', type: 'unknown' };

         const mtnsme500=price.mtnsme500
         const mtnsme1gb=price.mtnsme1gb
         const mtnsme2gb=price.mtnsme2gb
            const mtnsme3gb=price.mtnsme3gb
               const mtnsme5gb=price.mtnsme5gb
                  const mtnsme10gb=price.mtnsme10gb
                     const mtnsme2500mb=price.mtnsme2500mb
                        const mtnsme21gb=price.mtnsme21gb
                        const mtnsme21p5=price.mtnsme21p5
                        const mtnsme22gb=price.mtnsme22gb
                        const mtnsme23gb=price.mtnsme23gb
                        const mtnsme24gb=price.mtnsme24gb
                        const mtnsme25gb=price.mtnsme25gb
                        const mtnsme210gb=price.mtnsme210gb
                        const mtndatashare1gb=price.mtndatashare1gb
                        const mtndatashare2gb=price.mtndatashare2gb
                        const mtndatashare3gb=price.mtndatashare3gb
                        const mtndatashare5gb=price.mtndatashare5gb
                        const mtndatashare500mb=price.mtndatashare500mb
                        const mtncooperate500mb=price.cooperate500mb
                        const mtncooperate250mb=price.cooperate250mb
                        const mtncooperate1gb=price.cooperate1gb
                        const mtncooperate2gb=price.cooperate2gb
                        const mtncooperate3gb=price.cooperate3gb
                        const mtncooperate5gb=price.cooperate5gb
                        const mtncooperate10gb=  price.cooperate10gb
                        const mtngifting500mb=   price.mtngifting500mb
                        const mtngifting1gb=price.mtngifting1gb
                        const mtngifting1p5gb=price.mtngifting1p5gb
                        const mtngifting2p5gb=price.mtngifting2p5gb
                        const mtngifting3p5gb=price.mtngifting3p5gb
                        const mtngifting15gb=price.mtngifting15gb
                        const airelgifting1gb=price.airtelgifting1gb
                        const airelgifting3gb=price.airtelgifting3gb
                        const airelgifting10gb=price.airtelgifting10gb
                        const airelcooperate500mb=price.airtelcooperate500mb
                        const airelcooperate300mb=price.airtelcooperate300mb
                        const airelcooperate1gb=price.airtelcooperate1gb 
                        const airelcooperate2gb=price.airtelcooperate2gb 
                        const airelcooperate5gb=price.airtelcooperate5gb 
                        const airelcooperate10gb=price.airtelcooperate10gb 
                        const airelcooperate15gb=price.airtelcooperate15gb 
                        const glo200mb=price.glo200mb
                        const glo500mb=price.glo500mb
                         const glo2gb=price.glo2gb
                         const glo3gb=price.glo3gb
                        const glo1gb=price.glo1gb
                        const glo5gb=price.glo5gb
                        const glo10gb=price.glo10gb
                      const  nine500mb=price.nine500mb
                      const  nine1gb=price.nine1gb
                      const  nine2gb=price.nine2gb
                      const  nine3gb=price.nine3gb
                      const  nine5gb=price.nine5gb 
                      const  nine10gb=price.nine10gb 
                      const  nine15gb=price.nine10gb


























  const [network, setNetwork] = useState('');
  const [dataType, setDataType] = useState('');
  const [dataPlan, setDataPlan] = useState('');
  const [lastChoice, setLastChoice] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and restrict to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
    setDataType(''); // Reset dataType when network changes
    setDataPlan(''); // Reset dataPlan when network changes
    setLastChoice(''); // Reset lastChoice when network changes
  };

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
    setDataPlan(''); // Reset dataPlan when dataType changes
  };

  const handleDataPlanChange = (e) => {
    setDataPlan(e.target.value);
    setLastChoice(e.target.value); // Automatically set lastChoice
  };
  // Options for second dropdown based on network
    const nairaSign = '₦'
  const dataTypeOptions = {
    MTN: ['SME', 'SME2', 'GIFTING', 'COOPERATE GIFTING', 'DATA SHARE'],
    AIRTEL: ['300MB   COOPERATE GIFTING'  +nairaSign+airelcooperate300mb, '500MB   COOPERATE GIFTING'+nairaSign+airelcooperate500mb ,'1GB   GIFTING' +nairaSign+ airelgifting1gb  ,"1GB   COOPERATE GIFTING"+nairaSign+airelcooperate1gb ,"2GB   COOPERATE GIFTING"+nairaSign+ airelcooperate2gb ,
      "3GB   GIFTING"+nairaSign+airelgifting3gb ,"5GB   COOPERATE GIFTING"+nairaSign+ airelcooperate5gb ,"10GB   GIFTING"+nairaSign+airelgifting10gb ,"10GB   COOPERATE GIFTING"+nairaSign+ airelcooperate10gb,"15GB   COOPERATE GIFTING"+nairaSign+airelcooperate15gb ,
    ],
    GLO: ['200MB   COOPERATE GIFTING' +nairaSign+glo200mb, '500MB   COOPERATE GIFTING'+nairaSign+ glo500mb, '1GB   COOPERATE GIFTING'+nairaSign+glo1gb,"2GB   COOPERATE GIFTING"+nairaSign+ glo2gb,"3GB   COOPERATE GIFTING"+nairaSign+ glo3gb,
      "5GB   COOPERATE GIFTING"+nairaSign+glo5gb,"10GB   COOPERATE GIFTING"+nairaSign+glo10gb
    ],
    '9MOBILE': ['500MB   COOPERATE GIFTING'+nairaSign+nine500mb, '1GB   COOPERATE GIFTING'+nairaSign+nine1gb, '2GB   COOPERATE GIFTING'+nairaSign+nine2gb,"3GB   COOPERATE GIFTING"+nairaSign+ nine3gb,"5GB   COOPERATE GIFTING"+nairaSign+nine5gb,"10GB   COOPERATE GIFTING"+nairaSign+ nine10gb,"15GB   COOPERATE GIFTING"+nairaSign+ nine15gb],
  };


  // Options for third dropdown based on dataType (only for MTN)
  const dataPlanOptions = {
    SME: ['500MB   '+ nairaSign+mtnsme500, '1GB   '+nairaSign+ mtnsme1gb,"2GB   "+ nairaSign+mtnsme2gb,"3GB   "+nairaSign+mtnsme3gb,"5GB   "+nairaSign+mtnsme5gb,"10GB   "+nairaSign+ mtnsme10gb],
    SME2: ['500MB   '+nairaSign+mtnsme2500mb ,'1.5GB   '+nairaSign+mtnsme21p5, '1GB   '+nairaSign+mtnsme21gb, '2GB   '+nairaSign+mtnsme22gb,"3GB   "+nairaSign+mtnsme23gb,"4GB   "+nairaSign+mtnsme24gb ,"5GB   "+nairaSign+ mtnsme25gb ,"10GB   "+nairaSign+mtnsme210gb],
    GIFTING: ["500MB   "+nairaSign+mtngifting500mb ,"2.5GB   "+nairaSign+mtngifting2p5gb,"3.5GB   "+nairaSign+mtngifting3p5gb,"15GB   "+nairaSign+mtngifting15gb],
    'COOPERATE GIFTING': ['250MB   '+nairaSign+mtncooperate250mb, '500MB   '+nairaSign+mtncooperate500mb,"1GB   "+nairaSign+ mtncooperate1gb ,"2GB   "+nairaSign+mtncooperate2gb ,"3GB   "+nairaSign+mtncooperate3gb,"5GB   "+nairaSign+mtncooperate5gb,"10GB   "+nairaSign+mtncooperate10gb],
    'DATA SHARE': ['500MB   '+nairaSign+mtndatashare500mb, '1GB   '+nairaSign+mtndatashare1gb,"2GB   "+nairaSign+mtndatashare2gb,"3GB   "+nairaSign+mtndatashare3gb,"5GB   "+nairaSign+mtndatashare5gb ],
  };
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    setIsLoading(true)

  
    
    const foamData= new FormData(e.target)
    const network=foamData.get("network")  
    const datatype=foamData.get("datatype")  
    const phonenumber=foamData.get("phonenumber")  
    const pin=foamData.get("pin")  
    const byepass=foamData.get("byepass")  

    const checkbox=foamData.get("checkbox")  
    const mtnplan=foamData.get("mtnplan")  
  const id=currentUser.CustomerId
    try {
      const res=await apiRequest.post("/auth/BuyData",{
        network,datatype,mtnplan,phonenumber,pin,id,checkbox,mtnsme500,mtnsme1gb,mtnsme2gb,mtnsme3gb,mtnsme5gb,mtnsme10gb,mtnsme2500mb,mtnsme21gb,mtnsme21p5,mtnsme22gb,mtnsme23gb,mtnsme24gb,mtnsme25gb,mtnsme210gb,mtndatashare1gb,mtndatashare2gb,mtndatashare3gb,mtndatashare5gb
     , mtndatashare500mb,byepass,mtncooperate500mb,nairaSign,mtncooperate250mb,mtncooperate1gb,mtncooperate2gb,mtncooperate3gb,mtncooperate5gb,mtncooperate10gb,mtngifting500mb,mtngifting1gb,mtngifting1p5gb,mtngifting2p5gb,mtngifting3p5gb,mtngifting15gb,airelgifting1gb,airelgifting3gb,airelgifting10gb,airelcooperate500mb,airelcooperate300mb,airelcooperate1gb,airelcooperate2gb,airelcooperate5gb,airelcooperate10gb,airelcooperate15gb,glo200mb,glo500mb,glo1gb,glo2gb,glo3gb,glo5gb,glo10gb,nine500mb,nine1gb,nine2gb,nine3gb,nine5gb,nine10gb,nine15gb

    })
    console.log(res.data)
    updateUser(res.data)
      Navigate("/DataSuccess")
 

} catch (err) {
      setError(err.response.data.message)
    }
   finally{
    setIsLoading(false) 
   }
  }

  return (
        
    <div className="login">
      <div className="formContainer">
  
      <form onSubmit={handleSubmit}>
           
           <img src={ "/mufalogo.png"} alt="" width="50%" style={{alignSelf:"center"}} />
           {error&&<span style={{color:"red"}}>{error}</span>}

         <label>
           Network
           <select value={network} onChange={handleNetworkChange} name='network'  id='kn'>
             <option value="">---------</option>
             <option value="MTN">MTN</option>
             <option value="AIRTEL">AIRTEL</option>
             <option value="GLO">GLO</option>
             <option value="9MOBILE">9MOBILE</option>
           </select>
         </label>
   
         {/* Second Select: Data Type (dynamic based on Network) */}
         {network && (
           <label>
             Data Type
             <select value={dataType} onChange={handleDataTypeChange} name='datatype'  id='kn'>
               <option value="">------------</option>
               {dataTypeOptions[network]?.map((type) => (
                 <option key={type} value={type}>
                   {type}
                 </option>
               ))}
             </select>
           </label>
         )}
   
         {/* Third Select: Data Plan (only for MTN) */}
         {network === 'MTN' && dataType && dataPlanOptions[dataType]?.length > 0 && (
           <label>
             Choose MTN  Plan:
             <select value={dataPlan} onChange={handleDataPlanChange} name='mtnplan' id='kn'>
               <option value="">-------</option>
               {dataPlanOptions[dataType]?.map((plan) => (
                 <option key={plan} value={plan}>
                   {plan}
                 </option>
               ))}
             </select>
           </label>
         )}
   
     
              <input name="phonenumber"  type="number" placeholder="Phone Number"  id='kn'required  />
              <input
          type="password" // Hidden like a password field
          id="number-input"
          value={inputValue}
          name='pin'
          onChange={handleChange}
          maxLength="4" // Limits input to 4 characters
          pattern="\d*" // Ensures only numbers are input
          placeholder="Enter 4 digits"
          required
        />
    
    <label>
          <input type="checkbox"  name="byepass"/> Byepass Number Validator
        </label>

    

                   <button type="submit"  >Buy Now</button>

       </form>
      </div>

    </div>




  );
}

export default BuyData;

  


























































