import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WhipList = styled.ul`
  list-style: none;
`;

const Whip = ({ img, year, make, model, id }) => {
  return (
    <div>
      <WhipList>
        <li>
          <Link to={`/garage/${id}`}>
            <img src={img} />
          </Link>
        </li>
        <li>{year}</li>
        <li>{make}</li>
        <li>{model}</li>
      </WhipList>
    </div>
  );
};

export default Whip;
