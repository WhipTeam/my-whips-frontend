import React, { useEffect } from "react";
import axios from "axios";

const GaragesPage = ({ garages, setGarages }) => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/garages")
      .then(({ data }) => setGarages(data));
  }, []);

  return <div>GaragesPage</div>;
};

export default GaragesPage;
