import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Garage = ({
  name,
  img,
  owner,
  id,
  whips,
  setNeighborGarage,
  setNeighborWhips,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setNeighborGarage({
      name: name,
      img: img,
      owner: owner,
      _id: id,
      whips: whips,
    });
    console.log(whips);
    setNeighborWhips(whips);
  };

  // useEffect(() => {
  //   setNeighborGarage({
  //     name: name,
  //     img: img,
  //     owner: owner,
  //     _id: id,
  //     whips: whips,
  //   });
  //   setNeighborWhips(whips);
  // }, []);

  return (
    <div>
      <Link to={`/neighbor-garage/${id}`} onClick={handleClick}>
        <img src={img} alt={name} />
      </Link>
      <Link to={`/neighbor-garage/${id}`} onClick={handleClick}>
        <h3>{name}</h3>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Garage;
