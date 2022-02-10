import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }, disbatch] = useStateValue();

    
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://cdn11.bigcommerce.com/s-sk4r8/product_images/uploaded_images/bball-ad-960x350.jpg"      alt='description of image' className="checkout__ad"/>

                {basket?.length === 0 ? (
                    <div>
                        <h1>Your Shopping Basket is Empty</h1>
                        <p>You have no items in your Basket</p>
                    </div>
                ):(
                    <div>
                        <h2 className='checkout__title' >Your Shopping Basket</h2>
                        {/* list of all product */}

                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ) )}
                    </div>
                )}
            </div>
            {/* right */}
            <div className="checkout__right">
                <Subtotal/>

            </div>

        </div>
    )
}

export default Checkout
