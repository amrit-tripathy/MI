import React from 'react'
import "../styles/Offers.css"


const Offer = (props) => {
  return (
   <>
    <span className="Card">
        <a href={props.link}><img src={props.imgsrc} alt="mypic" /></a>
    </span>
   </>
  )
}

export default Offer