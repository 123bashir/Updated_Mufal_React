import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";

import  "../../../public/home/assets/vendor/bootstrap/css/bootstrap.min.css" 
import  "../../../public/home/assets/vendor/bootstrap-icons/bootstrap-icons.css" 

import  "../../../public/home/assets/css/style.css" 
import "../../../public/home/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"


import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
function ProfileUpdatePage() {
  const [message, setMessage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const {currentUser,updateUser}=useContext(AuthContext)
  const[error,setError]=useState("")
  const[Error,setEError]=useState("")

  const[avatar,setAvatar]=useState([])

  const navigate= useNavigate()
  const handleClose = () => {
    setShowDialog(false);
  };

  const Active=()=>{
    setShowDialog(true)
  }
  const handleSubmitt=async(e)=>{  
    e.preventDefault()
    const foamData =new FormData(e.target)
    const{Opassword,Cpassword,password}=Object.fromEntries(foamData)  
    try {
      const res=await apiRequest.put(`/users/p/${currentUser.CustomerId}`,{
       Cpassword,Opassword, password} 
      )
      updateUser(res.data)
   
      navigate("/home")

   
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
      
    }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const foamData =new FormData(e.target)
    const{email,username,pwd}=Object.fromEntries(foamData)
    try {
      const res=await apiRequest.put(`/users/${currentUser.CustomerId}`,{
       username,pwd, email,avatar:avatar[0]}
      )

      updateUser(res.data)
   
      navigate("/home")
     
   
    } catch (error) {
      console.log(error)
      setEError(error.response.data.message)
      
    }
  }
  return (
<div>
<main id="main" className="main">

<div className="pagetitle">
  <h1>Profile</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/home">Home</a></li>
      <li className="breadcrumb-item"><a href="/profile/update">profile</a></li>
  
    </ol>
  </nav>
</div>

<section className="section profile">
  <div className="row">
    <div className="col-xl-4">

      <div className="card">
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src={currentUser.avatar || "/noavata.jfif"} alt="Profile" className="rounded-circle"/>
          <h2>{currentUser.username}</h2>
        
        </div>
      </div>

    </div>

    <div className="col-xl-8">

      <div className="card">
        <div className="card-body pt-3">
          <ul className="nav nav-tabs nav-tabs-bordered">

            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
            </li>

        
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
            </li>


                {error && <span style={{color:"red"}}>{error}</span> }

          </ul>
          <div className="tab-content pt-2">

            <div className="tab-pane fade show active profile-overview" id="profile-overview">
              <h5 className="card-title">About</h5>
              <p className="small fst-italic">With Mufal DataSub All My Problem Have Solved!!!</p>

              <h5 className="card-title">Profile Details</h5>

              <div className="row">
                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                <div className="col-lg-9 col-md-8">{currentUser.username}</div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Position In Mufal</div>
                <div className="col-lg-9 col-md-8">Mufal DataSub Subscriber</div>
              </div>

             

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Country</div>
                <div className="col-lg-9 col-md-8">Nigeria</div>
              </div>

             

           
              <div className="row">
                <div className="col-lg-3 col-md-4 label">Email</div>
                <div className="col-lg-9 col-md-8">{currentUser.email}</div>
              </div>

            </div>

            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

              <form onSubmit={handleSubmit}>
              {showDialog && (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        zIndex: 1000,
        width: "90%",
        maxWidth: "400px",
        textAlign: "center",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        style={{
          marginBottom: "15px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#333",
        }}
      >
Enter Login Password  
  <p>{Error && <span style={{color:"red"}}>{Error}</span> }   </p>

    </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
    <div className="row mb-3">
                  <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label"></label>
                  <div className="col-md-8 col-lg-9">
                    <input name="pwd"  placeholder="Login Password Here"  type="password" className="form-control" id="fullName"/>
                  </div>
                  
                </div>

     </div>
     <button
        onClick={handleClose}
        style={{
          backgroundColor: "#ff4d4f",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#ff7875")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4f")}
      >
        Close
      </button>
      <button
        type="submit"
        style={{
          backgroundColor: "green",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "green")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
      >
Change       </button>
    </div>
  )}

  {/* Background overlay when dialog is active */}
  {showDialog && (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 999,
        animation: "fadeIn 0.3s ease-out",
      }}
    ></div>
  )}
                <div className="row mb-3">
                  <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div className="col-md-8 col-lg-9">
                    <img src= { avatar[0]||currentUser.avatar || "/noavata.jfif"} alt="Profile"/>
                    <div className="pt-2">
                      <a     style={{backgroundColor:"blue"}} className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload">  <UploadWidget 
          uwConfig={{
           cloudName:"dghi878zc",
           uploadPreset:"anything",
           multiple:false,
           maxImageFileSize:"2000000",
         folder:"avatars"
       }}
            
          setState={setAvatar}  
           /></i></a>
                      <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Username</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="username" defaultValue={currentUser.username} type="text" className="form-control" id="fullName"/>
                  </div>
                  
                </div>
 <div className="row mb-3">
                  <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="email" defaultValue={currentUser.email} type="text" className="form-control" id="fullName" />
                  </div>
                  
                </div>

                <div className="text-center">
                  <button type="button" onClick={Active} className="btn btn-primary">Save Changes</button>
                </div>
              </form>

            </div>

           

            <div className="tab-pane fade pt-3" id="profile-change-password">
              <form onSubmit={handleSubmitt}>

                <div className="row mb-3">
                  <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="Opassword" type="password" className="form-control" id="currentPassword"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="password" type="password" className="form-control" id="newPassword"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="Cpassword" className="col-md-4 col-lg-3 col-htmlForm-label">Re-enter New Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="Cpassword" type="password" className="form-control" id="renewPassword"/>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Change Password</button>
                </div>
              </form>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

</main>




  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</div>
  )
  
}

export default ProfileUpdatePage;
