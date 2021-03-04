import React from 'react';
import './ReviewItems.css';


const ReviewItems = (props) => {
    const {name, quantity, seller} = props.product;
    return (
        <div className="review-items">
            <h2 className="product-name">{name}</h2>
            <p>Quantity: {quantity}</p>
            <h5>Seller: {seller}</h5>
            <button className="main-button">Remove</button> 
        </div>
    );
};

export default ReviewItems;