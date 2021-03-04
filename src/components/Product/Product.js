import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product)
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div  className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                
                {
                    props.showAddToCart ===true && <button 
                    onClick={() => props.handleProductButton(props.product)} className="main-button">
                        <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;