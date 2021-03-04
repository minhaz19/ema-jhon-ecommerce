import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    
    const cart = props.cart;
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const Product = cart[i];
        price = price + Product.price;
    }
    let shipping = 0;
    if(price > 35 ){
        shipping = 0;
    }
    else if(price > 15){
        shipping = 4.99;
    }
    else if(price > 0){
        shipping = 12.99;
    }
    const productPricing =(num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = price/10;
    return (
        <div>
            <div className="summery">
                <h3>Ordered Summery</h3>
                <h5>Items Ordered: {cart.length}</h5>
            </div>
            <p><small>Price: ${productPricing(price)}</small></p>
            <p><small>Shipping & Handling:	${productPricing(shipping)}</small></p>
            <p><small>Total before tax: ${productPricing(shipping + price)}</small></p>
            <p><small>Estimated Tax: ${productPricing(tax)}</small></p>
            <p className =" total">Ordered Total: ${productPricing(price+shipping+tax)}</p>
            <br/>
            <Link to="/review"><button className="main-button">Order Review</button></Link>
        </div>
    );
};

export default Cart;