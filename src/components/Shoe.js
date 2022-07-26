import React from 'react';
import Product from '../Product';
import "./Men.css"

function Shoe() {
    return (
        <div className='men'>
            <div >
                <img className='men_banner_img' src="/Images/shoes_banner.png" alt="" />
                <img className='men_banner_img_phone' src="/Images/shoes_banner_phone.png" alt="" />
            </div>
            <div className='men_products'>
                <div className="home_row">

                    <Product
                        id="12345434"
                        title="Adidas ultra boost "
                        price={2197}
                        // rating={5}
                        image="./Images/shoes1.png"
                    />

                    <Product
                        id="14223434"
                        title="Adidas running "
                        price={3995}
                        rating={5}
                        image="./Images/shoes2.png"
                    />
                    <Product
                        id="14223434"
                        title="Adidas ultra boost "
                        price={595}
                        rating={5}
                        image="./Images/shoes3.png"
                    />
                </div>
                <div className="home_row">

                    <Product
                        id="12345434"
                        title="Adidas running "
                        price={507}
                        // rating={5}
                        image="./Images/shoes4.png"
                    />

                    <Product
                        id="14223434"
                        title="Adidas Sneakers "
                        price={995}
                        rating={5}
                        image="./Images/shoes5.png"
                    />
                    <Product
                        id="14223434"
                        title="Adidas Basketball shoes "
                        price={895}
                        rating={5}
                        image="./Images/shoes6.png"
                    />
                </div>
            </div>

        </div>
    )
}

export default Shoe