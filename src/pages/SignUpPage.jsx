import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (!formData.name || !formData.password) {
      alert("Fields cannot be empty");
    } else if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match");
    } else {
      axios.post(`http://localhost:4000/signup`, formData).then((res) => {
        console.log(res);
        navigate("/login");
      });
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
