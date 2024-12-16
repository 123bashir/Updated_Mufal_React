import React, { useState } from "react";
import { useContext,  useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiRequest from "../../src/lib/apiRequest";
import { AuthContext } from "../../src/context/AuthContext";
import  "./assets/vendor/bootstrap/css/bootstrap.min.css"
import  "./assets/vendor/bootstrap-icons/bootstrap-icons.css" 
import { FaMobileAlt, FaWifi } from 'react-icons/fa';
import "./assets/css/style.css"
const Navbar = () => {
  const [message, setMessage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
const navigate=useNavigate()
  const [trans,setTrans]=useState([]) 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const { updateUser, currentUser } = useContext(AuthContext); 
  const id=currentUser.CustomerId

  const handleClose = () => {
    setShowDialog(false);
  };
  const handleLogoutClose = () => {
    setShowLogout(false);
  };
  const handleLogout =async () => {
    const res=await apiRequest.delete("/auth/logout") 
    sessionStorage.removeItem("user")
    navigate("/")
  };
  const handleLogoutClick = () => {
    setShowLogout(true)
  };
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+2349038271764';
    const msg = encodeURIComponent(`Hello, I am "${currentUser.username}", and I am using Mufal Data Sub Smoothly.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${msg}`;
    window.open(whatsappUrl, "_blank");
  }; 
  
  useEffect(()=>{
    const Data=async()=>{
    const res=await apiRequest.get(`/auth/Data/${id}`)  
         updateUser(res.data)
    }
    Data()
 },[])
useEffect(()=>{  
  const fetchTrans=async()=>{



    
    try {
 
      const response = await apiRequest.get(`/auth/transaction/${id}`); // Adjust URL accordingly
   const price=response.data  
           setTrans(price)
    }
    
     catch (err) {
      console.error(err);
    }
  }
      fetchTrans()
},[])

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await apiRequest.get("/auth/dialog");
        setMessage(response.data);
        setShowDialog(true);

      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    fetchMessage();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <>  
    
      

    <div id="body" className="home">
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
        Notification
      </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        {message}
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
   {showLogout && (
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
Confirm First     </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
Are Sure You Want Logout?        </div>
      <button
        onClick={handleLogout}
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
        Yes,I Confirm
      </button>
      <button
        onClick={handleLogoutClose}
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
        No
      </button>
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

      <header className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <p  className="logo d-flex align-items-center">
           <h6>  <span className="d-none d-lg-block">Mufal DataSub</span> </h6> 
          </p>
          <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={toggleSidebar}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          ></i>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="#">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>
            </li>
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
              >
                <img
                  src={currentUser.avatar || "/noavata.jfif"}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {currentUser.username}
                </span>
              </a>
              
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside  className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/Home">
              <i className="bi bi-grid"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile/update"> 
              <i className="bi bi-person"></i>
              <span>Update Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/buyData">
              <i className="bi bi-bar-chart"></i>
              <span>Buy Data</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/buyAirtime">
                <i className="bi bi-telephone"></i>
              <span>Buy Airtime</span>
            </a>
          </li>
          <li className="nav-item">
    <a href={"/transactionA/"+id} className="nav-link"> 
              <i className="bi bi-card-list"></i>
              <span>Transaction History</span>
              </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ChangePin">
              <i className="bi bi-file-lock"></i>
              <span>Change Pin</span>
            </a>
          </li>
             <li className="nav-item">
            <a className="nav-link"href="#" onClick={handleLogoutClick}>
                <i className="bi bi-box-arrow-right"></i>
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </aside>

      <div className="pagetitle">
      <h1>Home</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/home">Home</a></li>
          <li className="breadcrumb-item">User</li>
        </ol>
      </nav>
    </div>

      {/* Main Content */}
      <main className={`main-content ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="pagetitle">
          <h1>Mufal DataSub</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li className="breadcrumb-item active">User</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="card info-card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="card-title">Wallet Balance</h5>
                    <div className="balance-section d-flex align-items-center">
                      <h6 className="me-2">
                        {showBalance ?" ₦"+ currentUser.Price : "****"}
                      </h6>
                       
                    </div>
                    <i
                        className={`bi ${
                          showBalance ? "bi-eye-slash" : "bi-eye"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={toggleBalance}
                      ></i>
                  </div>
                <Link to="/fund"  > <button className="btn btn-primary fund-btn">Fund</button> </Link> 
                </div>
              </div>
              <div className="card">
           
            
            
              <div className="card-body" style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Our Services</h5>

      <Link to="/BuyData" style={{ textDecoration: "none" }}>
        <div style={{  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: "#007bff",
  color: "white",
  padding: "15px 20px",
  margin: "10px 0",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",}}>
          <div style={{  fontSize: "24px",
  marginRight: "15px",
  color:"#fff",}}>
            <FaWifi />
          </div>
          <div style={{  flex: "1"}}>Buy Data</div>
        </div>
      </Link>

      <Link to="/BuyAirtime" style={{ textDecoration: "none" }}>
        <div style={{  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  backgroundColor: "#007bff",
  color: "white",
  padding: "15px 20px",
  margin: "10px 0",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",}}>
          <div style={{  fontSize: "24px",
  marginRight: "15px",
  color:"#fff",}}>
            <FaMobileAlt/>
          </div>
          <div style={{  flex: "1"}}>Buy Airtime</div>
        </div>
      </Link>
    </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card recent-sales">
              <div className="card-body">
  <h5 className="card-title">Todays Transactions</h5>

  <div className="table-responsive">
    <table className="table">
    
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Date & Time</th>
          <th>Amount</th>
          <th>Number</th>
        </tr>
        
        
      </thead>
         
      
      <tbody>
        

        {trans.map((tr, index) => (
          <tr key={index}>
            <td>{tr.transactionid}</td>
            <td>{tr.transactionstatus}</td>
            <td>{tr.createdAt}</td>
            <td>{tr.PlanName}</td>
            <td>{tr.RecipientNumber}</td>
          </tr>
        ))}
      </tbody>

          
    </table>
      {trans.length==0 ? 
    
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <i className="bi bi-exclamation-triangle me-1"></i>

                 No Any Transaction Made Today 
                 <br/>
                 <p><a href="/home">Click</a>To Refresh</p>
              </div>
              : null}
  </div>

  {/* View All button */}
  <div className="text-end mt-3">
  <Link to={"/transactionA/"+id}>   <button className="btn btn-primary" >
      View All
    </button>    </Link> 
  </div>
</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success" onClick={handleWhatsAppRedirect} type="button">Chat With Agent Via WhatsApp</button>
              </div>

      
<>  
      {/* Footer */}
      <footer className="footer">
       
      </footer>
      </>
    </div>
    
    </>
  );
};

export default Navbar;
