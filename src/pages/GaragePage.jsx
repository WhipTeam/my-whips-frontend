import React, { useEffect } from "react";
import axios from "axios";

const GaragePage = ({ user, setGarage }) => {
  console.log(user);
  useEffect(() => {
    console.log(user);
    user &&
      axios
        .get(`http://localhost:4000/garage?owner=${user._id}`)
        .then(({ data }) => setGarage(data));
  }, []);

  return <div>GaragePage</div>;
};

export default GaragePage;
