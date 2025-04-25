import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api';
import { useNavigate } from 'react-router-dom';
import './Users.css'; // 👈 import the CSS file

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddUser = () => {
    navigate('/adduser');
  };

  const handleEdit = (id) => {
    navigate(`/updateuser/${id}`);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Users List</h1>
      <button className="add-btn" onClick={handleAddUser}>Add New User</button>
      <ul className="user-list">
        {users.map(user => (
          <li key={user._id} className="user-item">
            <div>
              <strong>{user.name}</strong><br />
              <span>{user.email}</span>
            </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(user._id)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
