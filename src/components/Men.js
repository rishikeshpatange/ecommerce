import React from 'react';
import Product from '../Product';
import "./Men.css"

function Men() {
    return (
        <div className='men'>
            <div >
                <img className='men_banner_img' src="/Images/men_banner.png" alt="" />
                <img className='men_banner_img_phone' src="/Images/men_banner_phone.png" alt="" />
            </div>
            <div className='men_products'>
                <div className="home_row">

                    <Product
                        id="12345434"
                        title="Nike Air Zoom Pegasus"
                        price={9197}
                        // rating={5}
                        image="./Images/air-zoom-pegasus.png"
                    />

                    <Product
                        id="14223434"
                        title="Nike Therma-FIT ADV"
                        price={4995}
                        rating={5}
                        image="./Images/adv-long-sleeve.png"
                    />
                    <Product
                        id="14223434"
                        title="Nike Therma-FIT ADV"
                        price={4995}
                        rating={5}
                        image="./Images/adv-long-sleeve.png"
                    />
                </div>
            </div>

        </div>
    )
}

export default Men