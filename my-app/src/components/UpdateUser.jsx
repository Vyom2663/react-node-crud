import React, { useState, useEffect } from 'react';
import { putUser } from '../api';
import { useParams } from 'react-router-dom';  // If you're using React Router

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch existing user data to populate the form
    // You could use a getUser function here (if needed)
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { name, email, password };
      const updatedUser = await putUser(id, updatedData);
      alert(`User updated: ${updatedUser.name}`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
