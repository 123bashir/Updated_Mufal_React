


import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import mufal from "/mufalogo.png"; 
import { useState, useEffect } from "react";
import { Layout, RequireAuth, PreLayout } from "./routes/layout/layout";
import ProfilePage from "./routes/profilePage/profilePage";
import Navbar from "./components/navbar/Navbar";
import Fund from "./routes/Fund/fund";
import Landing from "./routes/landing/landing";
import BuyAirtime from "./routes/BuyAirtime/BuyAirtime";
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
import { singlePageLoader } from "./lib/loaders";
import TransactionHistory from "./routes/transaction";

// Simulate an authentication check (use real authentication logic in your project)
const isAuthenticated = () => {
  return !!sessionStorage.getItem('user'); // Example: check if token exists
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    
  
    {
      path: "/",
      element: <Landing />,  
    },
    { 
      path: "/ResetPassword/:id/:token", // Capture ID and token from the URL
      element: <ResetPassword />
    },
    {
      path: "/login",
      element: <Login />,  // Public login page
    },
    
    
    {
      path: "/register",
      element: <Register />,  // Public register page
    },
    

    // Protected Routes (accessible only after login)
    {
      path: "/",
      element: isAuthenticated() ? <PreLayout /> : <Navigate to="/login" />, // Redirect to login if not authenticated
      children: [
        {
          path: "/pin/:id",
          element: <Pin />,
        },
        {
          path: "/transaction/:id",
          element: <TransactionHistory />,
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
          path: "/home",
          element: <Navbar />,
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

    // Protected Profile Route
    {
      path: "/",
      element: isAuthenticated() ? <RequireAuth /> : <Navigate to="/login" />, // Redirect to login if not authenticated
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
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

