import React from 'react';
import { useUsers } from '../../context/UserContext';

const UserList = () => {
  const { users, deleteUser, setCurrentUser } = useUsers();

  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button 
                  className="btn btn-warning me-2" 
                  onClick={() => setCurrentUser(user)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
