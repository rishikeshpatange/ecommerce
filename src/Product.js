import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket },dispatch] = useStateValue();

    const addToBasket =()=>{
        // ADD ITEM TO BASKET...
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };

    return <div className='product'>
        <img src={image} alt="" />
        <div className="product_info">
            <p className='title' >{title}</p>
            <p className="product__price">
                <small>₹</small>
                <strong className='price'>{price}</strong>
            </p>
            
        </div>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>;
}

export default Product;
