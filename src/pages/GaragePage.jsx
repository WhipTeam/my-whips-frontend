import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const GaragePage = ({whips, deleteWhip, user}) => {
  return <div>

  <h1>{ whips.img }</h1>
  <h1>{ whips.make }</h1>
  <h1>{ whips.model }</h1>
  <h1>{ whips.year }</h1>
  <h1>{ whips.description }</h1>

  </div>;
};

export default GaragePage;
