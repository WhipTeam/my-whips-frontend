import React from "react";
import NeighborWhip from "../components/NeighborWhip";

const NeighborGaragePage = ({
  neighborGarage,
  neighborWhips,
  setNeighborWhip,
}) => {
  return (
    <div>
      <h1>{neighborGarage.name}</h1>
      {neighborWhips.map((w) => {
        return (
          <div>
            <NeighborWhip
              key={w._id}
              id={w._id}
              img={w.img}
              year={w.year}
              make={w.make}
              model={w.model}
              description={w.description}
              setNeighborWhip={setNeighborWhip}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NeighborGaragePage;
