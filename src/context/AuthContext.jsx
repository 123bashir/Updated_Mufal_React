import { createContext, useEffect, useState } from "react";

// Base64 encode and decode functions for obfuscation
const encodeData = (data) => btoa(JSON.stringify(data));
const decodeData = (encodedData) => JSON.parse(atob(encodedData));

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
      ? decodeData(sessionStorage.getItem("user"))
      : null
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem("user", encodeData(currentUser));
    } else {
      sessionStorage.removeItem("user"); // Clear if null
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
