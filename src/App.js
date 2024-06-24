import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import UserForm from './components/Dashboard/UserForm';
import UserList from './components/Dashboard/UserList';
import Unauthorized from './components/Unauthorized';
import PrivateRoute from './components/PrivateRoute';

const Dashboard = () => (
  <div className="container mt-5">
    <h2>Dashboard</h2>
    <UserForm />
    <UserList />
  </div>
);

const AdminPanel = () => (
  <div className="container mt-5">
    <h2>Admin Panel</h2>
    <UserForm />
    <UserList />
  </div>
);

const App = () => (
  <AuthProvider>
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute roles={['admin', 'user']}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={['admin']}>
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  </AuthProvider>
);

export default App;
