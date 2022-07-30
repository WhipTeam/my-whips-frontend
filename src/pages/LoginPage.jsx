import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type='text' name='username' />
        <br />
        <label>Password:</label>
        <input type='text' name='password' /><br></br>
      </form>
    </div>
  )
}

export default LoginPage;
