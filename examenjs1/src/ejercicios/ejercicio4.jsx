import React, { useState, useEffect } from 'react';
import './ejercicio4.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const handleUpdateData = () => {
    fetchData();
    setSelectedUser(null); // Reset selected user
  };

  return (
    <div className='user-list-container'>
      <button onClick={handleUpdateData}>Actualizar datos</button>
      <ul className='user-list'>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className='user-details'>
          <h2>Detalles del usuario</h2>
          <p>Nombre: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Teléfono: {selectedUser.phone}</p>
          <p>Sitio web: {selectedUser.website}</p>
          <p>Empresa: {selectedUser.company.name}</p>
          <p>Dirección: {selectedUser.address.street}, {selectedUser.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;