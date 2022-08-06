import React, { useEffect } from "react";
import axios from "axios";
import Whip from "../components/Whip";
import { Link } from "react-router-dom";

const GaragePage = ({ user, setGarage, garage, whips, setWhips, setWhip }) => {
  useEffect(() => {
    user &&
      axios
        .get(`http://localhost:4000/garage?owner=${user._id}`)
        .then(({ data }) => {
          setGarage(data);
          setWhips(data.whips);
        });
  }, []);

  return (
    <div>
      <h1>{user.name}'s Whips</h1>
      <button>
        <Link to="/garage/new-whip" garage={garage}>
          New Whip
        </Link>
      </button>
      {whips.map((w) => {
        return (
          <div>
            <Whip
              key={w._id}
              id={w._id}
              img={w.img}
              year={w.year}
              make={w.make}
              model={w.model}
              description={w.description}
              setWhip={setWhip}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GaragePage;
