import React, { useEffect } from "react";
import axios from "axios";
import Whip from "../components/Whip";
import { Link } from "react-router-dom";

const GaragePage = ({ user, setGarage, garage }) => {
  console.log(user);
  useEffect(() => {
    console.log(user);
    user &&
      axios
        .get(`http://localhost:4000/garage?owner=${user._id}`)
        .then(({ data }) => setGarage(data));
  }, []);

  return (
    <div>
      <h1>{user.name}'s Whips</h1>
      <button>
        <Link to="/garage/new-whip" garage={garage}>
          New Whip
        </Link>
      </button>
      {garage.whips.map((whip) => {
        return (
          <Whip
            key={whip._id}
            img={whip.img}
            year={whip.year}
            make={whip.make}
            model={whip.model}
          />
        );
      })}
    </div>
  );
};

export default GaragePage;
