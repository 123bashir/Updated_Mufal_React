import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
function ProfileUpdatePage() {
  const {currentUser,updateUser}=useContext(AuthContext)
  const[error,setError]=useState("")
  const[avatar,setAvatar]=useState([])

  const navigate= useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const foamData =new FormData(e.target)
    const{email,password,username}=Object.fromEntries(foamData)
    try {
      const res=await apiRequest.put(`/users/${currentUser.CustomerId}`,{
       username, email,password,avatar:avatar[0]}
      )
      updateUser(res.data)
   
      navigate("/home")
     
   
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
      
    }
  }
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
        <div className="sideContainer">
        <img src={avatar[0]||currentUser.avatar || "/noavata.png"} alt="" className="avatar" />

        <UploadWidget 
         uwConfig={{
          cloudName:"dghi878zc",
          uploadPreset:"anything",
          multiple:false,
          maxImageFileSize:"2000000",
          folder:"avatars"
        }}
            
          setState={setAvatar}  
            />
      </div>
      {error && <span style={{color:"red"}}>{error}</span> }

        
          <div className="item">   
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">   
            <label htmlFor="email">Username</label>
            <input
              id="email"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>

    </div>
  );
}

export default ProfileUpdatePage;
