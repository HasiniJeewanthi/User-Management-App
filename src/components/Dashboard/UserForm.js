import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';

const UserForm = ({ userToEdit, clearEdit }) => {
  const { addUser, updateUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setUsername(userToEdit.username);
      setEmail(userToEdit.email);
      setRole(userToEdit.role);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email, role };

    if (userToEdit) {
      updateUser(newUser);
      clearEdit();
    } else {
      addUser(newUser);
    }

    setUsername('');
    setEmail('');
    setRole('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={!!userToEdit}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <input
          type="text"
          className="form-control"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {userToEdit ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
