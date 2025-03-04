import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const encodeData = (data) => btoa(JSON.stringify(data));
const decodeData = (encodedString) => {
    try {
        const trimmedString = encodedString.trim();
        const isValid = /^[A-Za-z0-9+/]+={0,2}$/.test(trimmedString);
        
        if (!isValid) {
            console.error("Invalid base64 string");
            return null; // Handle the error as needed
        }

        const decodedData = atob(trimmedString); // Ensure this is a valid base64 string
        return JSON.parse(decodedData); // Assuming the decoded data is JSON
    } catch (error) {
        console.error("Decoding error:", error);
        return null; // Handle the error as needed
    }
};

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
        <AuthContext.Provider value={{ currentUser, updateUser, currentAdmin, updateAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext }; // Named export
