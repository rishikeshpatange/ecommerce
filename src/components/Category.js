import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className='category'>
            <div className='category_content'>
                <h1>WHO ARE YOU SHOPPING FOR?</h1>
            </div>
            <div className='category_types'>
            <Link to='/mens'>
                <div className='category_container'>
                    <img src="/Images/men.png" alt="" />
                </div>
                </Link>
                <div className='category_container'>
                    <img src="/Images/women.png" alt="" />
                </div>
                <div className='category_container'>
                    <img src="/Images/shoes.png" alt="" />
                </div>
            </div>
            <div className='category_types_phone'>
                <Link to='/mens'>
                    <div className='category_container'>
                        <img src="/Images/men_phone.png" alt="" />
                    </div>
                </Link>
                <div className='category_container'>
                    <img src="/Images/women_phone.png" alt="" />
                </div>
                <div className='category_container'>
                    <img src="/Images/shoes_phone.png" alt="" />
                </div>

            </div>
        </div>

    )
}

export default Category