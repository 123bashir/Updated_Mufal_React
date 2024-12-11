import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Home from"../../../public/home/Navbar"
import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Home />
      </div>
      <div className="content">
        <Outlet/>
      </div>
 
    </div>
  );
}


function PreLayout() {
  const{currentAdmin}=useContext(AuthContext)

  return (
    !currentAdmin ? (  <Navigate to="/" />): ( 
    <div className="layout">
    
      <div className="content">
        <Outlet/>
      </div>
    </div>)
  );
}


function RequireAuth() {
  const{currentUser}=useContext(AuthContext)

  return (
    !currentUser ? (  <Navigate to="/login" />): ( 
    <div className="layout">
    
      <div className="content">
        <Outlet/>
      </div>
    </div>)
  );
}

export {Layout,RequireAuth,PreLayout};
