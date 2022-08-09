import React, { useEffect } from "react";
import axios from "axios";
import Garage from "../components/Garage";
import styled from "styled-components";
import { PROD_URL } from "../../api";

const StyleDiv = styled.div`
  margin-top: 30px;
`;

const GaragesPage = ({
  garages,
  setGarages,
  setNeighborGarage,
  setNeighborWhips,
  neighborGarage,
  neighborWhips,
}) => {
  useEffect(() => {
    axios.get(`${PROD_URL}/garages`).then(({ data }) => setGarages(data));
  }, []);

  return (
    <StyleDiv>
      {garages.map((g) => {
        return (
          <Garage
            key={g._id}
            name={g.name}
            img={g.img}
            id={g._id}
            whips={g.whips}
            owner={g.owner}
            setNeighborGarage={setNeighborGarage}
            neighborGarage={neighborGarage}
            setNeighborWhips={setNeighborWhips}
            neighborWhips={neighborWhips}
          />
        );
      })}
    </StyleDiv>
  );
};

export default GaragesPage;
