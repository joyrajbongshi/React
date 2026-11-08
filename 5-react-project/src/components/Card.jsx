import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value) } />
      <p>Inside card for name state value: {props.name} </p>
    </div>
  )
}

export default Card
