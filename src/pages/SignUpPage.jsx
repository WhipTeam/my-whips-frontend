import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <br></br>
        <label>Confirm Password:</label>
        <input type="password" name="passwordConfirm" onChange={handleChange} />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
