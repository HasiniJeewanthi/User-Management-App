import React from 'react';
import { useUsers } from '../../context/UserContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './UserList.css';

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
        <TransitionGroup component="tbody">
          {users.map((user) => (
            <CSSTransition key={user.id} timeout={500} classNames="fade">
              <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button 
                    className="btn btn-warning" 
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
            </CSSTransition>
          ))}
        </TransitionGroup>
      </table>
    </div>
  );
};

export default UserList;
