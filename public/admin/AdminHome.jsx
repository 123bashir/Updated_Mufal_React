import React, { useEffect, useState } from "react";
import apiRequest from "../../src/lib/apiRequest";
// import "./assets/vendor/bootstrap/css/bootstrap.min.css";
// import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
import axios from "axios";




const AdminHome = () => {
  const [rufaI, setRufaI] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [Elerror,SetElerror]=useState("")
  const [d, setD] = useState("");
  const [DataBalance, setDataBalance] = useState("");
  const [AirtimeBalance, setAirtimeBalance] = useState("");
useEffect(()=>{
  const ElrfufaI=async()=>{
    try {
      const userDetailsResponse = await axios.get('https://elrufaidatalink.com/api/user/', {
      headers: {
        'Authorization': 'Token 3c88c484d3d405c4cb80b92bd3dc8eab182a4c50',
        'Content-Type': 'application/json' 
      }
    });

          const  elrufaiBalance = userDetailsResponse.data.user.Account_Balance;
     setRufaI(elrufaiBalance)
    } catch (error) {
      SetElerror(error.message)
    }
  }
  ElrfufaI()
},[])
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response1 = await apiRequest.get(`/auth/BalanceInfo`);
        const [a, b, c] = response1.data;
        const re = c.A - b.A;
        setD(re);
        setDataBalance(a.A);
        setAirtimeBalance(b.A);

       
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
<div id="body">

  
<header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="index.html" className="logo d-flex align-items-center">
    <img src="assets/img/logo.png" alt=""/>
    <span className="d-none d-lg-block">Mufal DataSub</span>
  </a>
 <span >   <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={toggleSidebar}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          ></i> </span>
</div>


<nav className="header-nav ms-auto">    
  <ul className="d-flex align-items-center">

 

    <li className="nav-item dropdown">

     


    </li>
    <li className="nav-item dropdown">

<a className="nav-link nav-icon" href="/Pop">
  <i className="bi bi-bookmark-plus"></i>
</a>


</li>
    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>


    </li>

    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src={"muhdd4.jpg"||"noavata.jfif"} alt="Profile" className="rounded-circle"/>
        <span className="d-none d-md-block dropdown-toggle ps-2">Muhammad</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Muhammad</h6>
          <span>Lawal</span>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>

<aside style={{backgroundColor:"white",height:"600px"} } className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

<ul className="sidebar-nav" id="sidebar-nav">

 
  <li className="nav-item">
    <a className="nav-link " href="/AllSubscribers">
      <i className="bi bi-person-circle"></i>
      <span>All Subscribers</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/FundingHistory">
      <i className="bi bi-cash-coin"></i>
      <span>Funding History</span>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link " href="/BManual">
      <i className="bi bi-clipboard-plus"></i>
      <span>Manual Funding</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/MFunding">
      <i className="bi bi-clipboard-minus"></i>
      <span>Manual Debiting</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/mtnpricing">
      <i className="bi bi-menu-app"></i>
      <span>MTN PRICING</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/airtelpricing">
      <i className="bi bi-hash"></i>
      <span>AIRTEL PRICING</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/glopricing">
      <i className="bi bi-google"></i>
      <span>GLO PRICING</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="/9mobilepricing">
      <i className="bi bi-hash"></i>
      <span>9MOBILE PRICING</span>
    </a>
  </li>


</ul>

</aside>

<main id="main"  className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>

<div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>

<section className="section dashboard">
  <div className="row">

    <div className="col-lg-8">
      <div className="row">
      <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

           

            <div className="card-body">

              <div className="d-flex align-items-center">

                <div className="ps-3">
              <h3>    <span className="text-success small pt-1 fw-bold">Users Total Balance</span>  </h3>

                  <h6>{"₦ "+d || "Network Error" }</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

           

            <div className="card-body">

              <div className="d-flex align-items-center">

                <div className="ps-3">
              <h3>    <span className="text-success small pt-1 fw-bold">Airtime Sent Today</span>  </h3>

                  <h6>{"₦ "+AirtimeBalance || "Network Error" }</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

           

            <div className="card-body">

              <div className="d-flex align-items-center">

                <div className="ps-3">
              <h3>    <span className="text-success small pt-1 fw-bold">Data Sent Today</span>  </h3>

                  <h6>{"₦ "+DataBalance || "Network Error" }</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
        
       

        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

           

            <div className="card-body">

              <div className="d-flex align-items-center">

                <div className="ps-3">
              <h1>    <span className="text-success small pt-1 fw-bold">My ElrufaI Balance</span>  </h1>

                  <h6>{"₦ "+rufaI || Elerror }</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
        
       
    

      </div>
    </div>

  

  </div>
</section>

</main>

<footer id="footer" className="footer">
<div className="copyright">
  &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
</div>
<div className="credits">

  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
</div>
</footer>

<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</div>
  );
};

export default AdminHome;
