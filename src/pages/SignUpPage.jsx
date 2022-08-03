import React from 'react'

const SignUpPage = () => {
  return (
    <div>
    <h1>Sign Up</h1>
    <form>
      <label>Username:</label>
      <input type='text' name='username' />
      <br />
      <label>Password:</label>
      <input type='text' name='password' /><br></br>
      <label>Confirm Password:</label>
      <input type='text' name='password' /><br></br>
      <button><a href="./garage">Sign Up</a></button>
    </form>
  </div>
  )
}

export default SignUpPage