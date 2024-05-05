import './Navbar.scss';
import Logo from '../../assets/Logo.png';
import {IoMenu} from '@react-icons/all-files/io5/IoMenu';
import {IoClose} from '@react-icons/all-files/io5/IoClose';
import { useState } from 'react';

const Navbar = () =>{

    const [showNav, setShowNav] = useState(false);

    return(
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <a href="#" className="navbar__logo" onClick={()=> setShowNav(false)}>
                    <img src={Logo} alt="logo" />
                </a>

                <ul className={`${showNav ? "show" : ""}`}>
                    <li  onClick={()=> setShowNav(false)}><a href="#">Product</a></li>
                    <li  onClick={()=> setShowNav(false)}><a href="#">Company</a></li>
                    <li  onClick={()=> setShowNav(false)}><a href="#">Pricing</a></li>
                    <li  onClick={()=> setShowNav(false)}><a href="#">Blog</a></li>

                </ul>

                <div className="navbar__btns">
                    <a href="#">login</a>
                    <a href="#" className='btn'>register</a>
                </div>

                <div className="navbar__menu" onClick={()=> setShowNav(!showNav)}>
                {showNav ? <IoClose/> : <IoMenu/>}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;