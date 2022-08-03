import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={setUser}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br></br>
      </form>
    </div>
  );
};

export default LoginPage;
