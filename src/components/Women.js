import React from 'react';
import Product from '../Product';
import "./Men.css"

function Women() {
    return (
        <div className='men'>
            <div >
                <img className='men_banner_img' src="/Images/women_banner.png" alt="" />
                <img className='men_banner_img_phone' src="/Images/women_banner_phone.png" alt="" />
            </div>
            <div className='men_products'>
                <div className="home_row">

                    <Product
                        id="12345434"
                        title="MEN jacket"
                        price={2197}
                        // rating={5}
                        image="./Images/women1.png"
                    />

                    <Product
                        id="14223434"
                        title="MEN wind jacket"
                        price={3995}
                        rating={5}
                        image="./Images/women2.png"
                    />
                    <Product
                        id="14223434"
                        title="MEN T-SHIRT"
                        price={595}
                        rating={5}
                        image="./Images/women3.png"
                    />
                </div>
                <div className="home_row">

                    <Product
                        id="12345434"
                        title="MEN shorts"
                        price={507}
                        // rating={5}
                        image="./Images/women4.png"
                    />

                    <Product
                        id="14223434"
                        title="MEN shorts"
                        price={995}
                        rating={5}
                        image="./Images/women5.png"
                    />
                    <Product
                        id="14223434"
                        title="MEN T-SHIRT"
                        price={895}
                        rating={5}
                        image="./Images/women6.png"
                    />
                </div>
            </div>

        </div>
    )
}

export default Women