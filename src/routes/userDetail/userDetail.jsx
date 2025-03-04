import React, { useEffect, useState } from 'react';
import './userDetail.css';
import apiRequest from '../../lib/apiRequest';
import { useParams } from 'react-router-dom';
function UserDetail({ user }) {
const{id}=useParams()
const[userInfo,setUser]=useState({})

  useEffect(()=>{
    const UserInfo=async()=>{
      try {
        const res=await apiRequest.get(`/auth/user/${id}`)
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
UserInfo()
  } ,[])
     console.log(userInfo)

  return (
    <div className="user-detail-container">
      <div className="user-card">
        <img src={userInfo.avatar || "/noavata.png"} alt="User profile" className="profile-img" />

        <div className="user-info">
          <h2>{userInfo.username} </h2>
          <p className="user-email">{userInfo.email}</p>
          <p className="user-balance"><strong>Balance:</strong> {"₦"+userInfo.Price}</p>
          <p><strong>Joined:</strong> {userInfo.createdAt}</p>
          <p><strong>ID:</strong> {userInfo.CustomerId}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
