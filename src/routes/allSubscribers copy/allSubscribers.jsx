import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './allSubscribers.css';
import apiRequest from '../../lib/apiRequest';

function AllSubscribers() {
  const [data, setData] = useState([]); // Ensure initial state is an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiRequest.get("/auth/fetchUser");
        if (Array.isArray(res.data)) {
          setData(res.data); // Only set data if it is an array
        } else {
          console.error("Unexpected response format:", res.data);
          setData([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setData([]); // Fallback to an empty array on error
      }
    };

    fetchUser();
  }, []);

  const handleAll = async (transactionID) => {
    try {
      await apiRequest.get(`/auth/user/${transactionID}`);
      navigate(`/user/${transactionID}`);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  const filteredCustomers = Array.isArray(data)
    ? data.filter(customer =>
        customer.customerID.toString().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []; // Ensure fallback to an empty array if data is not valid

  return (
    <div className="container">
      <h1>Customer Directory</h1>
      <p>Welcome! Use the Search Bar to search for subscribers by ID, Username, or Email.</p>

      <input
        type="text"
        placeholder="🔍 Search by ID, Username, or Email"
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
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map(customer => (
                <tr
                  key={customer.customerID}
                  onClick={() => handleAll(customer.customerID)}
                  className="table-row"
                >
                  <td>{customer.customerID}</td>
                  <td>{customer.email}</td>
                  <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSubscribers;
