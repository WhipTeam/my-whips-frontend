import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/login`, formData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(res.data);
        setUser(res.data);
        navigate("/garage");
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="username" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
