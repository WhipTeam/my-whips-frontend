import React from "react";

const Whip = ({ img, year, make, model }) => {
  return (
    <div>
      <ul>
        <li>{img}</li>
        <li>{year}</li>
        <li>{make}</li>
        <li>{model}</li>
      </ul>
    </div>
  );
};

export default Whip;
