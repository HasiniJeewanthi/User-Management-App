import React, { useState, useEffect } from 'react';
import { useUsers } from '../../context/UserContext';
import './UserForm.css';

const UserForm = () => {
  const { addUser, editUser, currentUser, clearCurrentUser } = useUsers();
  const [user, setUser] = useState({ username: '', email: '', role: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ username: '', email: '', role: '' });
    }
  }, [currentUser]);

  const validate = () => {
    let inputErrors = {};
    if (!user.username) inputErrors.username = "Username is required";
    if (!user.email) inputErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.email)) inputErrors.email = "Email is invalid";
    if (!user.role) inputErrors.role = "Role is required";
    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (currentUser) {
        editUser(user);
      } else {
        addUser(user);
      }
      setUser({ username: '', email: '', role: '' });
      clearCurrentUser();
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={user.username} 
          onChange={handleChange} 
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={user.email} 
          onChange={handleChange} 
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Role:</label>
        <input 
          type="text" 
          name="role" 
          value={user.role} 
          onChange={handleChange} 
        />
        {errors.role && <span className="error">{errors.role}</span>}
      </div>
      <button type="submit">
        {currentUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
