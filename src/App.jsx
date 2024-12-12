import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import mufal from "/mufalogo.png"; 
import { useState, useEffect } from "react";
import { Layout, RequireAuth, PreLayout } from "./routes/layout/layout";
import UserTransaction from "./routes/userTransaction/userTransation"; 
import MTN from "./routes/mtnpricing/mtnpricing";
import Home from "../public/home/Navbar.jsx";
import GLO from "./routes/glopricing copy/glopricing";
import Pop from "./routes/popup/popup.jsx";
import Landing from "../public/landing/landing";
import AdminHome from "../public/admin/AdminHome.jsx";
import NMOBILE from "./routes/9MOBILE/9mobilepricing";
import AIRTEL from "./routes/airtelpricing/airtelpricing";
import ManualDebiting from "./routes/ManualDebiting/ManualDebiting";
import AllSubscribers from "./routes/allSubscribers copy/allSubscribers";
import FundingHistory from "./routes/fundingHistory/fundingHistory";
import AdminLogin from "./routes/adminLogin";
import UserDetail from "./routes/userDetail/userDetail";
import Fund from "./routes/Fund/fund";
import ManualFunding from "./routes/ManualFunding/ManualFunding";
import BuyAirtime from "./routes/BuyAirtime/BuyAirtime";
import BManual from "./routes/BManual/BManual";
import TransactionDetails from "./routes/reciept";
import ChangePin from "./routes/changePin/ChangePin";
import SuccessPage from "./routes/DataSuccess";
import Pin from "./routes/pin/pin";
import BuyData from "./routes/BuyData/BuyData";
import Login from "./routes/login/login";
import ResetPassword from "./routes/pinReset/passwordReset";
import PasswordForgot from "./routes/PasswordForgot/passwordForgot";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import TransactionHistoryA from "./routes/transactionA";
import TransactionHistory from "./routes/transaction";
import BFunding from "./routes/BFunding copy/BFunding";

const isAuthenticated = () => {
  return !!sessionStorage.getItem('user');
};

const isAdmin = () => {
  return !!sessionStorage.getItem('admin');
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/ResetPassword/:id/:token",
      element: <ResetPassword />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Admin",
      element: <AdminLogin />,
    },
    {
      path: "/register",
      element: <Register />, 
    },
    
    {
      path: "/",
      element: isAuthenticated() ? <RequireAuth /> : <Navigate to="/login" />,
      children: [
        {
          path: "/pin/:id",
          element: <Pin />,
        },
        {
          path: "/transaction",
          element: <TransactionHistoryA />,
        },
        {
          path: "/transactionA/:id",
          element: <TransactionHistoryA />,
        },
    
        {
          path: "/reciept/:id",
          element: <TransactionDetails />,
        },
      
        {
          path: "/DataSuccess",
          element: <SuccessPage />,
        },
        {
          path: "/userTransaction",
          element: <UserTransaction />,
        },
     
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/fund",
          element: <Fund />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/passwordForgot",
          element: <PasswordForgot />,
        },
        {
          path: "/ChangePin",
          element: <ChangePin />,
        },
        {
          path: "/BuyAirtime",
          element: <BuyAirtime />,
        },
        {
          path: "/BuyData",
          element: <BuyData />,
        },
      ],
    },
    
    {
      path: "/",
      element: isAdmin() ? <RequireAuth /> : <Navigate to="/" />,
      children: [
        {
          path: "/Adminhome",
          element: <AdminHome />,
        },
        {
          path: "/ManualFunding",
          element: <ManualFunding />,
        },
        {
          path: "/user/:id",
          element: <UserDetail />,
        },
        {
          path: "/MFunding",
          element: <BFunding />,
        },
        {
          path: "/ManualDebiting",
          element: <ManualDebiting />,
        },
        {
          path: "/AllSubscribers",
          element: <AllSubscribers />,
        },
        {
          path: "/Pop",
          element: <Pop />,
        },
        {
          path: "/FundingHistory",
          element: <FundingHistory />,
        },
        {
          path: "/BDebiting/:id",
          element: <ManualDebiting />,
        },
        {
          path: "/BManual",
          element: <BManual />,
        },
        {
          path: "/BManual/:id",
          element: <ManualFunding />,
        },
        {
          path: "/9mobilepricing",
          element: <NMOBILE />,
        },
        {
          path: "/glopricing",
          element: <GLO />,
        },
        {
          path: "/airtelpricing",
          element: <AIRTEL />,
        },
        {
          path: "/mtnpricing",
          element: <MTN />,
        },
     
     
      ],
    },
  ]);

  return (
    <>
      {loading ? (
        // Custom loader with logo and text
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#B2BEB5",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              animation: "spin 3s linear infinite", // Logo animation (spins infinitely)
              marginBottom: "20px",
            }}
          >
            <img
              src={mufal}
              alt="Loading"
              style={{
                height: "120px",
                width: "120px",
              }}
            />
          </div>

          <div style={{ textAlign: "center", color: "#4fa94d", fontSize: "18px" }}>
            Loading... Please wait
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
