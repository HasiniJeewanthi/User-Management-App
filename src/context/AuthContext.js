import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Mock authentication service
    if (username === 'admin' && password === 'admin123') {
      setUser({ username, role: 'admin' });
      return true;
    } else if (username === 'user' && password === 'user123') {
      setUser({ username, role: 'user' });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
