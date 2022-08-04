import React, { useEffect } from "react";
import axios from "axios";
import Whip from "../components/Whip";
import { Link } from "react-router-dom";

const GaragePage = ({ user, setGarage }) => {
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
        <Link to="/garage/new-whip">New Whip</Link>
      </button>
    </div>
  );
};

export default GaragePage;
