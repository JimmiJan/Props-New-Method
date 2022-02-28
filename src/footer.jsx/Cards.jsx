import React from 'react'
import Footer from "./footer"
import Array from './Array'

const Cards = () => {
  return (
    <div>
      {/* <Footer value={"Heading1" } value2={"heading2"} value3={"heading3"} />
      <Footer value={"Heading1" } value2={"heading2"} value3={"heading3"} />
      <Footer value={"Heading1" } value2={"heading2"} value3={"heading3"} />
      <Footer value={"Heading1" } value2={"heading2"} value3={"heading3"} /> */}



      <Footer value={Array[0].Name1} value2={Array[0].Name2} value3={Array[0].Name3} />
      <Footer  value={Array[0].Name1} value2={Array[0].Name2} value3={Array[0].Name3} />
      <Footer value={Array[0].Name1} value2={Array[0].Name2} value3={Array[0].Name3}  />
      <Footer  value={Array[0].Name1} value2={Array[0].Name2} value3={Array[0].Name3} />
    </div>
  )
}

export default Cards
