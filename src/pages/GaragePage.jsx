import React from "react"
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react"


// const GaragePage = () => {
//   return <div>Garage Page</div>;
// };

const GaragePage = ({ garages }) => {
  const { id } = useParams()
  const [ garage, setGarage ] = useState()
  // Two ways to do it, 1 with props, 2 with a fresh request
  // First way
  // let coffee = coffees.find( c => c._id === id)

  useEffect(()=> {
      fetch(`http://localhost:3000/garages`)
      .then(res => res.json())
      .then(data => setGarage(data))
  }, [])
  
  
  
  console.log(garage)
  return (
      <div>
          {
          garage && ( <>
                      <h1>{garage.user}</h1>
                      <h2>{garage.whip}</h2>
                      <img src={garage.image} alt={garage.description} />
                      <p> {garage.description} </p>
                      <p>Garage <span>{garage.whip}</span></p>
                      {/* {garage.inStock ? 'In Stock' : 'Currently Unavailable'} */}
                      <Link to={`/garage/edit/${garage._id}`}>Edit Item</Link>
                  </>
                  )
          }
      </div>
  )
}

export default GaragePage;
