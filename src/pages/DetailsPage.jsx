import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailsPage = ({ whip, garageId }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    garageId: garageId,
  });

  const navigate = useNavigate();

  const deleteWhip = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_DB_URL}/garage/${id}`, formData)
      .then(() => {
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
      <Link to={`/garage/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <form onSubmit={deleteWhip}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DetailsPage;
