import React from "react";
import styled from "styled-components";

const WhipList = styled.ul`
  list-style: none;
`;

const Whip = ({ img, year, make, model }) => {
  return (
    <div>
      <WhipList>
        <li>{img}</li>
        <li>{year}</li>
        <li>{make}</li>
        <li>{model}</li>
      </WhipList>
    </div>
  );
};

export default Whip;
