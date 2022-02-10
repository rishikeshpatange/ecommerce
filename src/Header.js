import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, disbatch] = useStateValue();

    return (
        <div className='header' >

            <Link to='/'>
               <h1 className='header__logo'>Ecommerce </h1>
            </Link>
            <div className="header__search" >
                <input className='header_searchIn' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <Link to= '/login'>
                <div  className="header__option" >
                    <span className='header__optionOne' >Hello user</span>
                    <span className='header__optiontwo' >
                       Sign in</span>
                </div>
                </Link>
                {/* <div className="header__option">
                    <span className='header__optionOne' >Returns</span>
                    <span className='header__optiontwo' >& Orders</span>
                </div> */}
                {/* <div className="header__option">
                    <span className='header__optionOne' >Your</span>
                    <span className='header__optiontwo' >Prime</span>
                </div> */}
                <Link to='/Checkout' >
                    <div className="header_optionBasket">
                        <LocalMallIcon className='basket' />

                        <span className='header__optiontwo header-basketCount' >{basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
