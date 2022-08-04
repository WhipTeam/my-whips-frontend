import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  .nav {
    margin: 0 2vw 0 2vw;
  }
`;

const NavBar = ({ handleLogout, user }) => {
  return (
    <div>
      <NavBarContainer>
        {!user._id ? (
          <Link className="nav" to="/login">
            Login
          </Link>
        ) : null}
        {!user._id ? (
          <Link className="nav" to="/signup">
            Sign Up
          </Link>
        ) : null}
        {user._id ? (
          <Link className="nav" to="/garage">
            My Garage
          </Link>
        ) : null}
        {user._id ? (
          <Link className="nav" to="/garages">
            Garages
          </Link>
        ) : null}
        {user._id ? (
          <Link className="nav" onClick={handleLogout} to="/login">
            LogOut
          </Link>
        ) : null}
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
