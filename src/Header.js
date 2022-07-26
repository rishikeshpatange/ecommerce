import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Spiral} from 'hamburger-react';
import { useStateValue } from './StateProvider';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from "@material-ui/icons/Search";




function Header() {

    const [navbar, setNavbar] = useState(false);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [isopen, setOpen] = useState(false);

    function MenuBtn() {
        setShowMediaIcons(showMediaIcons => !setShowMediaIcons);
        setOpen(isopen => !setOpen)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeBackground);

    const [{ basket }, disbatch] = useStateValue();

    return (
        <div className={navbar ? 'header active' : "header"}>
            <Link to='/'>
                <img className='logo' src="/Images/adidas_white.png" alt="" />

            </Link>
            <div onClick={MenuBtn} className={
                showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>

                <Link to='/mens'  >
                    <div className="header__option">
                        <h1>Men</h1>
                    </div>
                </Link>

                <Link to='/womens' >
                    <div className="header__option">
                        <h1>Women</h1>
                    </div>
                </Link>
                <Link to='/shoes' >
                    <div className="header__option">
                        <h1>Shoes</h1>
                    </div>
                </Link>
                <Link to='/Checkout' >
                    <div className="header__option">
                        
                    <LocalMallIcon className='basket'/>
                  <p>{basket?.length}</p>
                    </div>
                </Link>
            </div>

            <div className="hambuger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><Spiral color='black' size={25}
                    toggled={isopen} toggle={setOpen} /></a>
            </div>
        </div>
    )
}

export default Header


// import React from 'react';
// import './Header.css';
// import SearchIcon from "@material-ui/icons/Search";
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';

// function Header() {
//     const [{ basket }, disbatch] = useStateValue();

//     return (
//         <div className='header' >

//             <Link to='/'>
//                <img className='logo' src="/Images/adidas_white.png" alt="" />
//             </Link>
//             <div className="header__search" >
//                 <input className='header_searchIn' type="text" />
//                 <SearchIcon className='header_searchIcon' />
//             </div>
//             <div className="header_nav">
//                 <div  className="header__option" >
//                     <h1>Men</h1>
//                 </div>
//                 <div  className="header__option" >
//                     <h1>Women</h1>
//                 </div>
                
//                 <Link to='/Checkout' >
//                     <div className="header_optionBasket">
//                         <LocalMallIcon className='basket' />

//                         <span className='header__optiontwo header-basketCount' >{basket?.length}
//                         </span>
//                     </div>
//                 </Link>
//             </div>

//         </div>
//     )
// }

// export default Header
