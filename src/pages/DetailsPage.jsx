import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DetailsPage = ({ whip }) => {
  // const { id } = useParams();
  // const [whip, setWhip] = useState(); //Whip is singular here, following the CoffeeShop example, he uses [coffees] in the App.js and [coffee] here

  // Two ways to do it, 1 with props, 2 with a fresh request
  // Method with Props
  // let whip = whips.find( w => w._id === id)

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/garage/${id}?garageId=${garage._id}?`)
  //     .then(({ data }) => setWhip(data));
  // }, []);

  // console.log(whip);
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

export default DetailsPage;
