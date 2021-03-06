import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import '../Shop/Shop.css';
import happyFace from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const handleOrderPlaced = () => {
        setOrderPlaced(true);
        setCart([]);
        processOrder();


    }
    
    useEffect(() =>{
        const savedProduct = getDatabaseCart([]);
        const productKeys = Object.keys(savedProduct);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedProduct[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyFace} alt=""/>
    }
    
    return (
        <div className="container">
            <div className="product-container">
                <h1>Cart Items : {cart.length}</h1>
                {
                    cart.map(pd => 
                        <ReviewItems key={pd.key} 
                        product={pd} removeProduct={removeProduct}>
                        </ReviewItems>)
                }
                {
                    thankYou
                }
            </div>
            <Cart cart={cart}>
                <Link ><button className="main-button" onClick={handleOrderPlaced}>Order Placed</button></Link>
            </Cart>
        </div>
    );
};

export default Review;