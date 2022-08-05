import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailsPage = ({ whip, garageId }) => {
  const { id } = useParams();
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

  const [formData, setFormData] = useState({
    garageId: garageId,
  });

  const navigate = useNavigate();

  const deleteWhip = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/garage/${id}`, formData).then(() => {
      navigate("/garage", { replace: true });
    });
  };
  return (
    <div>
      <h1>
        {whip.make} {whip.model} - {whip.year}
      </h1>
      <img src={whip.img} alt={`${whip.year} ${whip.make} ${whip.model}`} />
      <p>{whip.description}</p>
      <button>Edit</button>
      <form onSubmit={deleteWhip}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DetailsPage;
