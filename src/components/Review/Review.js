import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart,setCart] = useState([]);
    
    useEffect(() =>{
        const savedProduct = getDatabaseCart([]);
        const productKeys = Object.keys(savedProduct);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedProduct[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItems key={pd.key} product={pd}></ReviewItems>)
            }
        </div>
    );
};

export default Review;