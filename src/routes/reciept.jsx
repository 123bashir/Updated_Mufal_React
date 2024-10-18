import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function TransactionDetails() {
  const location = useLocation();
  const { transaction } = location.state || {}; 

  if (!transaction) {
    return <p>No transaction details available.</p>;
  }

  // Download receipt as PNG
  const handleDownloadPNG = () => {
    const receiptElement = document.getElementById('receipt'); 
    html2canvas(receiptElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'transaction_receipt.png';
      link.click();
    });
  };

  // Download receipt as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Transaction Receipt', 10, 10);
    doc.text(`Transaction ID: ${transaction.transactionid}`, 10, 20);
    doc.text(`Amount: ₦${transaction.transactionAmount}`, 10, 30);
    doc.text(`Date: ${transaction.createdAT}`, 10, 40);
    doc.text(`Status: ${transaction.transactionStatus}`, 10, 50);
    doc.text(`Plan Name: ${transaction.PlanName}`, 10, 60);
    doc.text(`Recipient Number: ${transaction.RecipientNumber}`, 10, 70);
    doc.save('transaction_receipt.pdf');
  };

  // Share transaction details via WhatsApp
  const handleShare = () => {
    const message = `Transaction Details:\n\nTransaction ID: ${transaction.transactionid}\nAmount: ₦${transaction.transactionAmount}\nDate: ${transaction.createdAT}\nStatus: ${transaction.transactionStatus}`;
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
      <h1 style={{ color: '#4CAF50' }}>Transaction Details</h1>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p><strong>Transaction ID:</strong> {transaction[0].transactionId}</p>
        <p><strong>Amount:</strong> ₦{transaction[0].transactionAmount}</p>
        <p><strong>Date:</strong> {transaction[0].createdAT}</p>
        <p><strong>Status:</strong> {transaction[0].transactionStatus}</p>
        <p><strong>Plan Name:</strong> {transaction[0].PlanName}</p>
        <p><strong>Recipient Number:</strong> {transaction[0].RecipientNumber}</p>
      </div>

      {/* Buttons for Download and Share */}
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
