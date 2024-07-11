import React, { createContext, useState, useContext } from 'react';

// Create a context object
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Function to handle login
  const login = (token) => {
    localStorage.setItem('token', token); // Save token to local storage
    setToken(token);
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

