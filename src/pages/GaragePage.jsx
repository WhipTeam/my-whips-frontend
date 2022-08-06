import React, { useEffect } from "react";
import axios from "axios";
import Whip from "../components/Whip";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledForm = styled.form`

  button {
  background-color: #08d;
  border-radius: 20px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
  width: 4vm;
};
button:active {
  background-color: #06b;
};
span {

}
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`


const GaragePage = ({ user, setGarage, garage, whips, setWhips, setWhip }) => {
  useEffect(() => {
    user &&
      axios
        .get(`http://localhost:4000/garage?owner=${user._id}`)
        .then(({ data }) => {
          setGarage(data);
          setWhips(data.whips);
        });
  }, []);

  return (
    <div class="container">
      <h1>{user.name}'s Whips</h1>
      <StyledForm>
      <button>
        <Link to="/garage/new-whip" garage={garage}>
          New Whip
        </Link>
      </button>
      
      
      {whips.map((w) => {
        return (
          <span>
            <Whip
              key={w._id}
              id={w._id}
              img={w.img}
              year={w.year}
              make={w.make}
              model={w.model}
              description={w.description}
              setWhip={setWhip}
            />
          </span>
        );
      })}
      </StyledForm>
    </div>
    
  );
};

export default GaragePage;
