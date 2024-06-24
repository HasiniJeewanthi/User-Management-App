import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import UserForm from './components/Dashboard/UserForm';
import UserList from './components/Dashboard/UserList';

const Dashboard = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  const clearEdit = () => {
    setUserToEdit(null);
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <UserForm userToEdit={userToEdit} clearEdit={clearEdit} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
