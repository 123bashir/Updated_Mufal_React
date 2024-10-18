import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const price = location.state || { price: 'Price not available', type: 'unknown' };
  const transactions = price[0];
console.log(transactions)
  const handleTransaction = async (transactionId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8800/api/auth/transactionDetail/${transactionId}`);
      const transactionDetails = response.data;

      navigate(`/reciept/${transactionId}`, { state: { transaction: transactionDetails } });
    } catch (err) {
      setError('Error fetching transaction details. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
 

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Transaction History</h2>
      
            {transactions.length==0 ? <p> No Transaction Made </p>: null}
      {transactions.map((transaction) => (
        <div
          key={transaction.transactionid}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <p style={{ margin: '5px 0' }}>
            <strong>Transaction ID:</strong> {transaction.transactionid}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Status:</strong> {transaction.transactionstatus}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Amount:</strong> ₦{transaction.planname}
          </p>
          <a
            onClick={() => handleTransaction(transaction.transactionid)}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#4caf50',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          >
            View Full Detail
          </a>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
