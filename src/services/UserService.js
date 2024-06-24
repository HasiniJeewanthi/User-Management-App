let users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'user', email: 'user@example.com', role: 'user' },
  ];
  
  export const getUsers = () => {
    return users;
  };
  
  export const addUser = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return users;
  };
  
  export const updateUser = (id, updatedUser) => {
    users = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
    return users;
  };
  
  export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    return users;
  };
  