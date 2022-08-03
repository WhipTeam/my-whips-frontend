import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  .nav {
    margin: 0 2vw 0 2vw;
  }
`;

const NavBar = ({ handleLogout }) => {
  return (
    <div>
      <NavBarContainer>
        <Link className="nav" to="/login">
          Login
        </Link>
        <Link className="nav" to="/signup">
          Sign Up
        </Link>
        <Link className="nav" to="/mywhips">
          My Garage
        </Link>
        <Link className="nav" to="/garages">
          Garages
        </Link>
        <Link className="nav" onClick={handleLogout} to="/login">
          LogOut
        </Link>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
