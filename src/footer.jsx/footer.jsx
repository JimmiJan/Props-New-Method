import React from 'react'

const Footer = (props) => {
    console.log(props)
  return (
    <div>
      <h1> {props.value} </h1>
      <h2 > {props.value2} </h2>
      <h3> {props.value3} </h3>
    
    </div>
  )
}

export default Footer
