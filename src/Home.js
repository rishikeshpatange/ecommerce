import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className='home'>

            <Banner/>
            <Category/>

            {/* product */}
            {/* <div className="home_row">

                <Product
                    id="12345434"
                    title="Nike Air Zoom Pegasus 38 Premium"
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
            </div>
            <div className="home_row">

                <Product
                    id="1234564"
                    title="Zion
                        Men's Hoodie "
                    price={3995}
                    rating={5}
                    image="./Images/zion-hoodie.png"
                />
                <Product
                    id="12343774"
                    title="Kyrie Irving Nets Statement Edition 2020"
                    price={4995}
                    rating={5}
                    image="./Images/nikelab.png"
                />
                <Product
                    id="12341734"
                    title="KD14
                        Basketball Shoes"
                    price={11597}
                    rating={5}
                    image="./Images/kd14-basketball.png"
                />
            </div>
            <div className="home_row">

                <Product
                    id="12348934"
                    title="Women's French Terry Graphic Hoodie"
                    price={3995}
                    rating={5}
                    image="./Images/sportswear-french-terry.png"
                />
                <Product
                    id="12345434"
                    title="Nike Air Zoom Pegasus 38 Premium"
                    price={9197}
                    // rating={5}
                    image="./Images/air-zoom-pegasus.png"
                />

            </div> */}
        </div>

    )
}

export default Home
