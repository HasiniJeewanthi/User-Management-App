import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserList = ({ onEdit }) => {
  const { users, deleteUser } = useContext(UserContext);

  return (
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
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                className="btn btn-warning btn-action"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-action"
                onClick={() => deleteUser(user.username)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
