import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NeighborDetailsPage from "../pages/NeighborDetailsPage";

const WhipList = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
const NeighborWhip = ({
  id,
  make,
  model,
  year,
  img,
  description,
  setNeighborWhip,
}) => {
  const handleClick = () => {
    setNeighborWhip({
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
        <Link to={`/neighbor-garage/${id}/details`} onClick={handleClick}>
          <img src={img} />
        </Link>
        <Link to={`/neighbor-garage/${id}/details`} onClick={handleClick}>
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

export default NeighborWhip;
