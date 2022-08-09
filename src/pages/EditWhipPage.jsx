import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PROD_URL from "../api/index";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #c0ffee;
  border-radius: 20px;
  box-sizing: border-box;
  box-align: center;
  margin: auto;
  height: 500px;
  padding: 20px;
  width: 320px;
  margin-top: 30px;

  .title {
    color: solid black;
    font-family: "Gill Sans";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    align-items: top;
  }
  .button {
    background-color: #08d;
    border-radius: 20px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 150px;
    margin-top: 38px;
    text-align: center;
    width: 100%;
  }
  .button:active {
    background-color: #06b;
  }
  .inputfield {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
    text-align: center;
  }
  .inputfield1 {
    display: flex;
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 50%;
    outline: 0;
    padding: 4px 40px 0;
    width: 100%;
    text-align: center;
  }
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

    axios.put(`${PROD_URL}/garage/${id}/edit`, formData); //I believe this is the URL we would use but please adjust if necessary
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
        <div className="title">Edit Whip</div>
        <label htmlFor="make">Make</label>
        <input
          id="make"
          name="make"
          type="text"
          className="inputfield1"
          value={formData?.make}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="model">Model</label>
        <input
          id="model"
          name="model"
          type="text"
          className="inputfield"
          value={formData?.model}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="text"
          className="inputfield"
          value={formData?.year}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="img">Image</label>
        <input
          id="img"
          name="img"
          type="text"
          className="inputfield"
          value={formData?.img}
          onChange={handleChange}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          className="inputfield"
          value={formData?.description}
          onChange={handleChange}
        />
      </div>

      <input className="button" type="submit" value="Edit Whip" />
    </StyledForm>
  );
};
export default EditWhipPage;
