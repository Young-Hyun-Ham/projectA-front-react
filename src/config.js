import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const apiUrl = "http://ec2-3-38-208-217.ap-northeast-2.compute.amazonaws.com:8000";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('access_token') ? true : false
  );

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
