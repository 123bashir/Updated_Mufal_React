import React from "react";

const SuccessPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f0f8ff",
      }}
    >
      <img
        src="/success.jfif" // Replace with your success image URL
        alt="Success"
        style={{
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "24px", marginBottom: "10px", color: "#28a745" }}>
        Transaction Successful!
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
        Your transaction was completed successfully. Thank you for using our
        service.
      </p>
      <button
        onClick={() => window.location.href = "/home"} // Replace with your homepage link
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default SuccessPage;
