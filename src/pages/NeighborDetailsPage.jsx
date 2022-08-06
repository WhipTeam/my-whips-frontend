import React from "react";

const NeighborDetailsPage = ({ whip }) => {
  return (
    <div>
      <h1>
        {whip.make} {whip.model} - {whip.year}
      </h1>
      <img src={whip.img} alt={`${whip.year} ${whip.make} ${whip.model}`} />
      <p>{whip.description}</p>
    </div>
  );
};

export default NeighborDetailsPage;
