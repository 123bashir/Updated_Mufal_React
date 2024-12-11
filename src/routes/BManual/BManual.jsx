
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BManual.css';
import apiRequest from '../../lib/apiRequest';
function BManual() {
const [data ,setDat]=useState([])
const navigate=useNavigate()
  const [searchTerm, setSearchTerm] =useState('')

useEffect(()=>{
  const fetchUser=async()=>{
    try {
      const res=await  apiRequest.get("/auth/fetchUser") 
setDat(res.data)    } catch (error) {
      console.error(error)
    }
  }
  fetchUser()
} ,[])

  const HandleAll = async (transactionID) => {
    try {
      const response = await apiRequest.get(`/auth/user/${transactionID}`);
      navigate(`/BManual/${transactionID}`)
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };
  const filteredCustomers = data.filter(customer =>
    customer.customerID.toString().includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.username.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <div className="container">
      <h1>Customer Directory</h1>
      <p>Welcome! Use Search Bar To Search For  Subscriber By ID ,Username or Email.</p>
      
      <input
        type="text"
        placeholder="🔍 Search by ID or Email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      
      <div className="table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Email</th>
              <th>Date Joined</th>
            </tr>
          </thead>
            {filteredCustomers.map(customer => (
              <tr key={customer.customerID} onClick={() => HandleAll(customer.customerID)} className="table-row">
                <td>{customer.customerID}</td>
                <td>{customer.email}</td>
                <td>{customer.createdAt}</td>
              </tr>
            ))}
        
        </table>
      </div>

 
    </div>
  );
}

export default BManual;

