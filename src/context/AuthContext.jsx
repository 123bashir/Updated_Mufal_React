import { createContext, useEffect, useState } from "react";

const encodeData = (data) => btoa(JSON.stringify(data));
const decodeData = (encodedData) => JSON.parse(atob(encodedData));

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
      ? decodeData(sessionStorage.getItem("user"))
      : null 
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    sessionStorage.getItem("admin")
      ? decodeData(sessionStorage.getItem("admin"))
      : null 
  );
  const updateAdmin = (data) => {
    setCurrentAdmin(data);
  };

  const updateUser = (data) => {
    setCurrentUser(data);
  };
  useEffect(() => {
    if (currentAdmin) {
      sessionStorage.setItem("admin", encodeData(currentAdmin));
    } else {
      sessionStorage.removeItem("admin");
    }
  }, [currentAdmin]);

  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem("user", encodeData(currentUser));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser,currentAdmin,updateAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
