import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";


import apiRequest from '../lib/apiRequest';
import { AuthContext } from '../context/AuthContext';

const TransactionHistory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transaction, setTransaction] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext); 
  const id = currentUser.CustomerId;

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await apiRequest.get(`/auth/transactionA/${id}`);
        const data = response.data;
        setTransaction(data);

        console.log(response.data)
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    fetchMessage();
  }, [id]);

  const handleTransaction = async (transactionId) => {
    setLoading(true);
    try {
      await apiRequest.get(`/auth/transactionDetail/${transactionId}`);
      navigate(`/reciept/${transactionId}`);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
      setError("Failed to load transaction details.");
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      backgroundColor: '#f0f4f8', 
      minHeight: '100vh', 
      padding: '20px', 
      boxSizing: 'border-box' 
    }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
        Transaction History
      </h2>

      {transaction.length === 0 ? (
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          fontSize: '18px',
          color: '#555',
          fontWeight: 'bold'
        }}>
          <p>No Transaction Made Yet</p>
          <p>All your transactions will be displayed here once completed. Stay tuned!</p>
        </div>
      ) : null}

      {transaction.map((transaction) => (
        <div
          key={transaction.transactionid}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <p style={{ margin: '5px 0' }}>
            <strong>Transaction ID:</strong> {transaction.transactionid}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Date:</strong> {transaction.createdAt}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Status:</strong> {transaction.transactionstatus}
          </p>
          <a
            onClick={() => handleTransaction(transaction.transactionid)}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              cursor: "pointer",
              backgroundColor: '#4caf50',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              textAlign: 'center',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4caf50'}
          >
            View Full Detail
          </a>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
