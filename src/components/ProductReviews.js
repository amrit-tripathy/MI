import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"
const Prod=[
    {
        "image": "https://i02.appmifile.com/11_operator_in/19/05/2021/981f40e9e6ecc687153fc6a08b7c067d.jpg?width=606&height=252",
        "review": "PRO DISPLAY. PRO CAMERAS",
        "name": "REDMI NOTE 10 PRO",
        "price": "₹ 15,999"
  },
  {
        "image": "https://i02.appmifile.com/426_operator_in/10/05/2021/ced1802c9525a8939582544bb2822f90.jpg?width=606&height=252",
        "review": "TRULY SMART. TRULY SAFE. TRULY CONVENIENT.",
        "name": "MI SMART WATER PURIFIER ",
        "price": "₹ 12,999"
  }
]
const ProductReviews = () => {
  return (
    <div className='ProductReviews'>
        <ProductReviewCard  imgsrc={Prod[0].image} price={Prod[0].price} name={Prod[0].name} review={Prod[0].review} />
        <ProductReviewCard  imgsrc={Prod[1].image} price={Prod[1].price} name={Prod[1].name} review={Prod[1].review} />

    </div>
  )
}

export default ProductReviews