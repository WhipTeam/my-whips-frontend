import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const EditWhipPage = ({ whip, garage, setWhip, whipId }) => {
  let { id } = useParams(); //Used in the handleSubmit function
  let navigate = useNavigate();

  const initialState = {
    make: whip.make,
    model: whip.model,
    year: whip.year,
    img: whip.img,
    description: whip.description,
    garageId: garage._id,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4000/garage/${id}/edit`, formData); //I believe this is the URL we would use but please adjust if necessary
    setWhip({
      make: formData.make,
      model: formData.model,
      year: formData.year,
      img: formData.img,
      description: formData.description,
      _id: whipId,
    });
    navigate(`/garage/${id}`, { replace: true }); //Maybe change the redirect here if necessary

    // setFormData(initialState);
    // setWhips(res.data);
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:4000/garage/${id}`).then((res) => {
  //     setFormData(res.data);
  //   });
  // }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="make">make</label>
        <input
          id="make"
          name="make"
          type="text"
          value={formData?.make}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input
          id="model"
          name="model"
          type="text"
          value={formData?.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="text"
          value={formData?.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="img">Image</label>
        <input
          id="img"
          name="img"
          type="text"
          value={formData?.img}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData?.description}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value="Edit Whip" />
    </StyledForm>
  );
};
export default EditWhipPage;
