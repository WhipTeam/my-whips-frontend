import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";

const WhipList = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

const Whip = ({ img, year, make, model, id, setWhip, description }) => {
  const handleClick = () => {
    setWhip({
      img: img,
      year: year,
      make: make,
      model: model,
      description: description,
      _id: id,
    });
  };
  return (
    <div>
      <WhipList>
        <Link to={`/garage/${id}`} onClick={handleClick}>
          <img src={img} />
        </Link>
        <Link to={`/garage/${id}`} onClick={handleClick}>
          <h3>
            {make} {model} - {year}
          </h3>
        </Link>
        <br />
        <br />
      </WhipList>
    </div>
  );
};

export default Whip;
