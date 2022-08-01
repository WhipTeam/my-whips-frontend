import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
    }
`
// Adjust styling to preference

const NewWhipPage = ({ addWhip }) => {
  
  const initialState = {
    make: '',
    model: '',
    year: '',
    img: '',
    description: ''
  }

const navigate = useNavigate()

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
  console.log(e.target)
  setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData)
  axios.put(`http://localhost:3000/garage/`, formData ) //I believe this is the URL we would use but please adjust if necessary
  .then(res =>  {

      setFormData(initialState)
      addWhip(res.data)
      navigate('/', { replace: true }) //Maybe change the redirect here if necessary
  })
}

  return (
    <StyledForm onSubmit={handleSubmit}>
    <div>
        <label htmlFor='make'>make</label>
        <input id='make' name='make' type='text' value={formData?.name} onChange={handleChange} />
    </div>
    <div>
        <label htmlFor='model'>Model</label>
        <input id='model' name='model' type='text' checked={formData?.model}  onChange={handleChange} />
    </div>
    <div>
        <label htmlFor='year'>Year</label>
        <input id='year' name='year' type='text'   value={formData?.year}  onChange={handleChange} />
    </div>
    <div>
        <label htmlFor='image'>Image</label>
        <input id='image' name='image' type='text' value={formData?.image}   onChange={handleChange} />
    </div>
    <div>
        <label htmlFor='description'>Description</label>
        <input id='description' name='description' type='text' value={formData?.description}  onChange={handleChange} />
    </div>

    <input type='submit' value='Create Whip' />
    
</StyledForm>
  )
};

export default NewWhipPage;
