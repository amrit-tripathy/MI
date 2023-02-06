import React from 'react'
import "../styles/HotItemCard.css"

const Hotcard = (props) => {
  return (
   <div className='hotItemCard'>

        <img src={props.imgsrc} alt="2" />
        <p>{props.namecard}</p>
        <span>{props.price}</span>


   </div>
  )
}

export default Hotcard