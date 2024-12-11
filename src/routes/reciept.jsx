import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import apiRequest from '../lib/apiRequest';
import { useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useContext } from 'react';
import { jsPDF } from 'jspdf';

function TransactionDetails() {
const{id}=useParams("") 
const[transaction,setDetail]=useState([])
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await apiRequest.get(`/auth/transactionDetail/${id}`);
        setDetail(response.data[0]) 
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);
  if (!transaction) {
    return <p>No transaction details available.</p>;
  }

  // Download receipt as PNG
  const handleDownloadPNG = () => {
    const receiptElement = document.getElementById('receipt'); 
    html2canvas(receiptElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = transaction.RecipientNumber+" "+transaction.TodayDate+".png";
      link.click();
    });
  };
 
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Transaction Receipt', 10, 10);
    doc.text(`Transaction ID: ${transaction.transactionId}`, 10, 20);
    doc.text(`Amount: ₦${transaction.transactionAmount}`, 10, 30);
    doc.text(`Date: ${transaction.TodayDate}`, 10, 40);
    doc.text(`Status: ${transaction.transactionStatus}`, 10, 50);
    doc.text(`Network Plan: ${transaction.NetworkPlan}`, 10, 50);

    doc.text(`Plan Name: ${transaction.PlanName}`, 10, 60);
    doc.text(`Recipient Number: ${transaction.RecipientNumber}`, 10, 70);
    doc.save(transaction.RecipientNumber+" "+transaction.TodayDate +'.pdf');
  };

  // Share transaction details via WhatsApp
  const handleShare = () => {
    const message = `Transaction Details:\n\nTransaction ID: ${transaction.transactionid}\nAmount: ₦${transaction.transactionAmount}\nDate: ${transaction.TodayDate}\nStatus: ${transaction.transactionStatus}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      id="receipt"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ color: '#4CAF50' }}>Transaction Details</h2>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p><strong>Transaction ID:</strong> {transaction.transactionId}</p>
        <p><strong>Amount:</strong> ₦{transaction.transactionAmount}</p>
        <p><strong>Date:</strong> {transaction.TodayDate}</p>
        <p><strong>Network Plan:</strong> {transaction.NetworkPlan}</p>

        <p><strong>Status:</strong> {transaction.transactionStatus}</p>
        <p><strong>Plan Name:</strong> {transaction.PlanName}</p>
        <p><strong>Recipient Number:</strong> {transaction.RecipientNumber}</p>
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <button
          onClick={handleDownloadPNG}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '30%',
          }}
        >
          Download as PNG
        </button>

        <button
          onClick={handleDownloadPDF}
          style={{
            backgroundColor: '#008CBA',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '30%',
          }}
        >
          Download as PDF
        </button>

        <button
          onClick={handleShare}
          style={{
            backgroundColor: '#FFA500',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '30%',
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
}

export default TransactionDetails;
