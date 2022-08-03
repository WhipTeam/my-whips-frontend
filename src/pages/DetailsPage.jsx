import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

const DetailsPage = ({ whips }) => {
  const { id } = useParams()
  const [ whip, setWhip ] = useState() //Whip is singular here, following the CoffeeShop example, he uses [coffees] in the App.js and [coffee] here

  
  // Two ways to do it, 1 with props, 2 with a fresh request
  // Method with Props
  // let whip = whips.find( w => w._id === id)

  useEffect(()=> {
      fetch(`http://localhost:3000/garage/${id}`)
      .then(res => res.json())
      .then(data => setWhip(data))
  }, [])
  
  
  
  console.log(whip)
  return (
      <div>
          {
          whip && ( <>
                      <h1>{whip.make}</h1>
                      <h2>{whip.model}</h2>
                      <h2>{whip.year}</h2>
                      <img src={whip.img} alt={whip.description} />
                      <p> {whip.description} </p>
                      {/* <Link to={`/coffee/edit/${coffee._id}`}>Edit Item</Link> */} 
                      {/* Unsure if we want to add a link to edit the whip here */}
                  </>
                  )
          }
      </div>
  )
}

export default DetailsPage;
