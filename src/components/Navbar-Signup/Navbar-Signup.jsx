import React from 'react'
import './Navbar-Signup.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search_icon.svg'
import bell_icon from '../../assets/images/bell_icon.svg'
import profile_img from '../../assets/images/profile_img.svg'
import caret_icon from '../../assets/images/caret_icon.svg'
import { useNavigate } from 'react-router-dom';

const NavbarSignup = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Netflix" />
            </div>
            <div className="navbar-right">
                <button className="btn">English</button>
                <button className="btn btn-red-sm" onClick={() => navigate('/login')}>Sign In</button>
            </div>
        </div>
    )
}

export default NavbarSignup