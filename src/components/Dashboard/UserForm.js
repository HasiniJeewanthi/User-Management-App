import React, { useState, useEffect } from 'react';
import { useUsers } from '../../context/UserContext';

const UserForm = () => {
  const { addUser, editUser, currentUser } = useUsers(); // Removed setCurrentUser
  const [user, setUser] = useState({ username: '', email: '', role: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ username: '', email: '', role: '' });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({ username: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <input
          type="text"
          className="form-control"
          name="role"
          value={user.role}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {currentUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
