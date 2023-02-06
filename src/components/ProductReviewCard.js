import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = (props) => {
  return (
    <div className='ProductReviewCard'>
        <img src={props.imgsrc} alt="454" />
        <h5>{props.review}</h5>
        <span>{props.name}</span>
        <b>{props.price}</b>

    </div>
  )
}

export default ProductReviewCard