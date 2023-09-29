import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
    const accessToken = localStorage.getItem('_k');
    if (accessToken) {
        return true;
      }
      else{
        return false;
      }
});
useEffect(()=>{
    if(!isLoggedIn){
        navigate('/');
    }
},[isLoggedIn])

  

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    // alert("sdefrg");
    setIsLoggedIn(false);
    localStorage.clear(); 
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };