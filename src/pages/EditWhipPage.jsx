import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const EditWhipPage = ({ setWhips }) => {
  let { id } = useParams() //Used in the handleSubmit function
  let navigate = useNavigate()

const initialState = {
  make: '',
  model: '',
  year: '',
  img: '',
  description: ''
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
  console.log(e.target)
  setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData)
  axios.put(`http://localhost:3000/garage/${id}`, formData ) //I believe this is the URL we would use but please adjust if necessary
  .then(res =>  {

      setFormData(initialState)
      setWhips(res.data)
      navigate('/', { replace: true }) //Maybe change the redirect here if necessary
  })
}


useEffect(()=> {
  axios.get(`http://localhost:3000/garage/${id}`)
  .then(res => {
      setFormData(res.data)
  })
}, [])


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

            <input type='submit' value='Edit Whip' />
            
        </StyledForm>
  )
  
}
export default EditWhipPage;
