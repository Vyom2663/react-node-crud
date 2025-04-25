import React, { useState } from "react";
import { postUser } from "../api";
import "./styles.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email, password };
      const newUser = await postUser(userData);
      alert(`User added: ${newUser.name}`);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="add-user-container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
