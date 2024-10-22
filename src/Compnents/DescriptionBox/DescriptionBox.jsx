import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a digital platform that allows
               users to browse, select, and purchase products or services online.
               It typically features a user-friendly interface with categories, product 
               Customers can easily navigate through different product listings, add items
               to a shopping cart, and complete transactions through various payment gateways. 
               features, providing a seamless shopping experience.</p>
               
               <p>
               An e-commerce website streamlines the shopping process by offering convenience 
               and accessibility to customers around the clock. It enables users to explore a wide 
               range of products from the comfort of their homes, compare prices, and make informed
               purchasing decisions. With personalized recommendations, discounts, and promotions, 
               customer service.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
