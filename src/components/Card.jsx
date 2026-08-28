import React from 'react'

const Card = ({title,amount}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{amount}</p>
    </div>
  )
}

export default Card
