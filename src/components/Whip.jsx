import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";

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
